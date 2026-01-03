import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './AdminSignup.css';

const AdminSignup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        birthDate: '',
        phoneNumber: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        if (!formData.email || !formData.password || !formData.name || !formData.birthDate || !formData.phoneNumber) {
            setError('모든 필드를 입력해주세요.');
            return false;
        }

        if (formData.password.length < 6) {
            setError('비밀번호는 최소 6자 이상이어야 합니다.');
            return false;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('비밀번호가 일치하지 않습니다.');
            return false;
        }

        // 이메일 형식 검증
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('유효한 이메일 주소를 입력해주세요.');
            return false;
        }

        // 전화번호 형식 검증 (한국 전화번호)
        const phoneRegex = /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/;
        if (!phoneRegex.test(formData.phoneNumber)) {
            setError('유효한 전화번호를 입력해주세요. (예: 010-1234-5678)');
            return false;
        }

        return true;
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            // Firebase Authentication으로 사용자 생성 (비밀번호는 자동으로 암호화됨)
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            const user = userCredential.user;

            // Firestore에 추가 사용자 정보 저장
            await setDoc(doc(db, 'users', user.uid), {
                email: formData.email,
                name: formData.name,
                birthDate: formData.birthDate,
                phoneNumber: formData.phoneNumber,
                isApproved: false, // 기본값: 승인되지 않음
                createdAt: new Date().toISOString(),
                role: 'pending' // 역할: 대기 중
            });

            // 회원가입 성공 후 자동 로그아웃 (승인 전까지 로그인 불가)
            await auth.signOut();

            alert('회원가입이 완료되었습니다. 관리자 승인 후 로그인이 가능합니다.');
            navigate('/admin/login');

        } catch (err) {
            console.error('Signup error:', err);
            switch (err.code) {
                case 'auth/email-already-in-use':
                    setError('이미 사용 중인 이메일입니다.');
                    break;
                case 'auth/invalid-email':
                    setError('유효하지 않은 이메일 주소입니다.');
                    break;
                case 'auth/operation-not-allowed':
                    setError('이메일/비밀번호 인증이 활성화되지 않았습니다.');
                    break;
                case 'auth/weak-password':
                    setError('비밀번호가 너무 약합니다. 더 강력한 비밀번호를 사용해주세요.');
                    break;
                default:
                    setError('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-signup-wrapper">
            <div className="admin-signup-container">
                <div className="admin-signup-header">
                    <h1>관리자 회원가입</h1>
                    <p>계정을 생성하고 관리자 승인을 기다려주세요</p>
                </div>

                <form onSubmit={handleSignup} className="admin-signup-form">
                    <div className="form-group">
                        <label htmlFor="email">이메일 *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="admin@example.com"
                            required
                            autoComplete="email"
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="password">비밀번호 *</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="최소 6자 이상"
                                required
                                autoComplete="new-password"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">비밀번호 확인 *</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="비밀번호 재입력"
                                required
                                autoComplete="new-password"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">이름 *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="홍길동"
                            required
                            autoComplete="name"
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="birthDate">생년월일 *</label>
                            <input
                                type="date"
                                id="birthDate"
                                name="birthDate"
                                value={formData.birthDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phoneNumber">전화번호 *</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="010-1234-5678"
                                required
                                autoComplete="tel"
                            />
                        </div>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button
                        type="submit"
                        className="signup-button"
                        disabled={loading}
                    >
                        {loading ? '가입 중...' : '회원가입'}
                    </button>
                </form>

                <div className="admin-signup-footer">
                    <p>이미 계정이 있으신가요?</p>
                    <button
                        onClick={() => navigate('/admin/login')}
                        className="back-login-button"
                    >
                        로그인하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminSignup;
