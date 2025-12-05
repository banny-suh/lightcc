import React, { useState, useEffect } from 'react';
import './Modal.css';

const SignupModal = ({ onClose, onSwitchToLogin }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
    });

    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [onClose]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        if (!formData.agreeTerms) {
            alert('약관에 동의해주세요.');
            return;
        }

        // TODO: Implement actual signup logic
        console.log('Signup attempt:', formData);
        alert('회원가입 기능은 추후 구현될 예정입니다.');
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>

                <h2 className="modal-title">회원가입</h2>

                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">이름</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-input"
                            placeholder="이름을 입력하세요"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="signup-email">이메일</label>
                        <input
                            type="email"
                            id="signup-email"
                            name="email"
                            className="form-input"
                            placeholder="example@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="signup-password">비밀번호</label>
                        <input
                            type="password"
                            id="signup-password"
                            name="password"
                            className="form-input"
                            placeholder="비밀번호를 입력하세요"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="confirmPassword">비밀번호 확인</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="form-input"
                            placeholder="비밀번호를 다시 입력하세요"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-checkbox-group">
                        <input
                            type="checkbox"
                            id="agreeTerms"
                            name="agreeTerms"
                            className="form-checkbox"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                        />
                        <label className="form-checkbox-label" htmlFor="agreeTerms">
                            이용약관 및 개인정보처리방침에 동의합니다
                        </label>
                    </div>

                    <button type="submit" className="form-submit">
                        회원가입
                    </button>
                </form>

                <div className="modal-footer">
                    이미 계정이 있으신가요?
                    <span className="modal-link" onClick={onSwitchToLogin}>
                        로그인
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SignupModal;
