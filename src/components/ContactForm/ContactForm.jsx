import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LuMessageSquare, LuSend } from 'react-icons/lu';
import CustomSelect from '../Shared/CustomSelect';
import './ContactForm.css';

const ContactForm = () => {
  const { t } = useTranslation('contact');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
    details: '',
  });

  const categoryOptions = [
    { label: t('form.options.manufacturing'), value: 'manufacturing' },
    { label: t('form.options.procurement'), value: 'procurement' },
    { label: t('form.options.pr'), value: 'pr' },
    { label: t('form.options.marketing'), value: 'marketing' },
    { label: t('form.options.media'), value: 'media' },
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
            <LuMessageSquare className="form-title-icon" />
            <span className="form-title-text">{t('form.title')}</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* Name */}
            <div className="form-group">
              <label className="form-label">
                <span className="required-star">*</span>
                {t('form.labels.name')}
              </label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder={t('form.placeholders.name')}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label className="form-label">
                <span className="required-star">*</span>
                {t('form.labels.phone')}
              </label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder={t('form.placeholders.phone')}
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="form-label">{t('form.labels.email')}</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder={t('form.placeholders.email')}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Category */}
            <div className="form-group">
              <label className="form-label">{t('form.labels.category')}</label>
              <CustomSelect
                options={categoryOptions}
                value={formData.category}
                onChange={handleCategoryChange}
                placeholder={t('form.placeholders.category')}
              />
            </div>
          </div>

          {/* Details */}
          <div className="form-group">
            <label className="form-label">{t('form.labels.details')}</label>
            <textarea
              name="details"
              className="form-textarea"
              placeholder={t('form.placeholders.details')}
              value={formData.details}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-footer">
            <button type="submit" className="submit-btn">
              <LuSend className="btn-icon" />
              <span>{t('form.submit')}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Development Message (Toast) */}
      {showMessage && (
        <div className="toast-msg animate-in slide-in-from-bottom-5 fade-in duration-300">
          {t('form.toast')}
        </div>
      )}
    </section>
  );
};

export default ContactForm;
