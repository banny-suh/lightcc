import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            console.log('1>> auth, email, password :', auth, email, password);

            await signInWithEmailAndPassword(auth, email, password);

            console.log('2>> auth, email, password :', auth, email, password);
            // 로그인 성공 시 어드민 페이지로 이동
            navigate('/admin');
        } catch (err) {
            console.error('Login error:', err);
            switch (err.code) {
                case 'auth/invalid-email':
                    setError('유효하지 않은 이메일 주소입니다.');
                    break;
                case 'auth/user-disabled':
                    setError('비활성화된 계정입니다.');
                    break;
                case 'auth/user-not-found':
                    setError('존재하지 않는 계정입니다.');
                    break;
                case 'auth/wrong-password':
                    setError('잘못된 비밀번호입니다.');
                    break;
                case 'auth/invalid-credential':
                    setError('이메일 또는 비밀번호가 올바르지 않습니다.');
                    break;
                default:
                    setError('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-login-wrapper">
            <div className="admin-login-container">
                <div className="admin-login-header">
                    <h1>관리자 로그인</h1>
                    <p>허가된 사용자만 접근 가능합니다</p>
                </div>

                <form onSubmit={handleLogin} className="admin-login-form">
                    <div className="form-group">
                        <label htmlFor="email">이메일</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@example.com"
                            required
                            autoComplete="email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button
                        type="submit"
                        className="login-button"
                        disabled={loading}
                    >
                        {loading ? '로그인 중...' : '로그인'}
                    </button>
                </form>

                <div className="admin-login-footer">
                    {/* <div className="footer-divider">
                        <span>또는</span>
                    </div>
                    <button
                        onClick={() => navigate('/admin/signup')}
                        className="signup-link-button"
                    >
                        회원가입하기
                    </button> */}
                    <button
                        onClick={() => navigate('/')}
                        className="back-home-button"
                    >
                        홈으로 돌아가기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
