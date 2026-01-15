import React, { useState } from 'react';
import { PiChatDotsThin, PiPaperPlaneTiltThin } from 'react-icons/pi';
import CustomSelect from '../Shared/CustomSelect';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
    details: '',
  });

  const categoryOptions = [
    { label: '生产制造', value: 'manufacturing' },
    { label: '行业采购', value: 'procurement' },
    { label: '公共关系', value: 'pr' },
    { label: '营销代理', value: 'marketing' },
    { label: '媒体宣传', value: 'media' },
  ];

  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      category: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);

    // Show development message
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <section className="contact-form-section">
      <div className="contact-container">
        <div className="form-header">
          <div className="form-title-wrapper">
            <PiChatDotsThin className="form-title-icon" />
            <span className="form-title-text">在线留言</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* Name */}
            <div className="form-group">
              <label className="form-label">
                <span className="required-star">*</span>您的姓名
              </label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="请输入姓名"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label className="form-label">
                <span className="required-star">*</span>您的电话
              </label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="请输入联系电话"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="form-label">您的邮箱（可选）</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="请输入您的邮箱（可选）"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Category */}
            <div className="form-group">
              <label className="form-label">诉求分类（可选）</label>
              <CustomSelect
                options={categoryOptions}
                value={formData.category}
                onChange={handleCategoryChange}
                placeholder="请选择您的主要诉求（可选）"
              />
            </div>
          </div>

          {/* Details */}
          <div className="form-group">
            <label className="form-label">详情</label>
            <textarea
              name="details"
              className="form-textarea"
              placeholder="请详细描述您的需求和建议，我们将第一时间联系您"
              value={formData.details}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-footer">
            <button type="submit" className="submit-btn">
              <PiPaperPlaneTiltThin className="btn-icon" />
              <span>提交留言</span>
            </button>
          </div>
        </form>
      </div>

      {/* Development Message (Toast) */}
      {showMessage && (
        <div className="toast-msg animate-in slide-in-from-bottom-5 fade-in duration-300">
          后端服务正在开发中，请稍后再试
        </div>
      )}
    </section>
  );
};

export default ContactForm;
