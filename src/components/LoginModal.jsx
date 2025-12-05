import React, { useState, useEffect } from 'react';
import './Modal.css';

const LoginModal = ({ onClose, onSwitchToSignup }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
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
        // TODO: Implement actual login logic
        console.log('Login attempt:', formData);
        alert('로그인 기능은 추후 구현될 예정입니다.');
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

                <h2 className="modal-title">로그인</h2>

                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">이메일</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input"
                            placeholder="example@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="password">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-input"
                            placeholder="비밀번호를 입력하세요"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-checkbox-group">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            className="form-checkbox"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                        />
                        <label className="form-checkbox-label" htmlFor="rememberMe">
                            로그인 상태 유지
                        </label>
                    </div>

                    <button type="submit" className="form-submit">
                        로그인
                    </button>
                </form>

                <div className="modal-footer">
                    계정이 없으신가요?
                    <span className="modal-link" onClick={onSwitchToSignup}>
                        회원가입
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
