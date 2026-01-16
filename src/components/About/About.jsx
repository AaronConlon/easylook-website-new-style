import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { LuQuote, LuX } from 'react-icons/lu';
import Breadcrumbs from '../Shared/Breadcrumbs';

const About = () => {
  const { t } = useTranslation('about');
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Lock body scroll when video modal is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVideoOpen]);

  const handlePlayClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseClick = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="about-page bg-white w-full">
      <Helmet>
        <title>{t('helmet.title')}</title>
        <meta name="description" content={t('helmet.description')} />
      </Helmet>

      <div className="about-header flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-5xl font-bold text-[var(--easylook-text-primary)] mb-6">
          {t('header.title')}
        </h1>
        <p className="text-xl sm:text-2xl text-[var(--text-secondary)] font-normal text-center max-w-2xl mb-12">
          {t('header.subtitle')}
        </p>
        <div className="max-w-4xl mx-auto space-y-6 text-[var(--text-secondary)] leading-relaxed text-justify px-4">
          <p>{t('header.desc1')}</p>
          <p>{t('header.desc2')}</p>
          <p>{t('header.desc3')}</p>
        </div>
      </div>

      {/* Video Preview Section */}
      <div className="about-video-container max-w-[1200px] mx-auto px-4 mb-20 relative">
        <div
          className="w-full relative bg-gray-100 overflow-hidden group cursor-pointer"
          style={{ aspectRatio: '16/9', borderRadius: '20px' }}
          onClick={handlePlayClick}
        >
          <video
            src="https://pub-0c1ad352efc44d9c8eb67280c316dc2c.r2.dev/boat-720p.mp4"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Overlay Button */}
          <div className="absolute left-0 right-0 bottom-12 flex items-center justify-center transition-colors group-hover:bg-black/10">
            <button className="px-6 py-2 bg-transparent border border-white rounded-full text-white text-base hover:bg-white/10 transition-all transform hover:scale-105 cursor-pointer">
              {t('video.button')}
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
          <button
            onClick={handleCloseClick}
            className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Close video"
          >
            <LuX size={40} />
          </button>

          <div className="w-[90%] max-w-[1200px] aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
            <video
              src="https://pub-0c1ad352efc44d9c8eb67280c316dc2c.r2.dev/boat-720p.mp4"
              className="w-full h-full"
              controls
              autoPlay
            />
          </div>
        </div>
      )}

      {/* Grid Section */}
      <div className="about-grid-container max-w-[1200px] mx-auto px-4 mb-20">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-[var(--color-sub)] p-16 rounded-[24px]">
            <blockquote className="text-center relative">
              <div>
                <h6 className="text-3xl font-bold text-[var(--easylook-text-primary)] mb-6">
                  {t('cards.1.title')}
                </h6>
                <p className="relative text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
                  <LuQuote className="absolute top-0 right-0 transform translate-x-4 -translate-y-12 text-[120px] text-[var(--easylook-text-primary)] opacity-5" />
                  <span className="relative z-10">{t('cards.1.quote')}</span>
                </p>
              </div>
            </blockquote>
          </div>

          {/* Card 2 */}
          <div className="bg-[var(--color-sub)] p-16 rounded-[24px]">
            <blockquote className="text-center relative">
              <div>
                <h6 className="text-3xl font-bold text-[var(--easylook-text-primary)] mb-6">
                  {t('cards.2.title')}
                </h6>
                <p className="relative text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
                  <LuQuote className="absolute top-0 right-0 transform translate-x-4 -translate-y-12 text-[120px] text-[var(--easylook-text-primary)] opacity-5" />
                  <span className="relative z-10">{t('cards.2.quote')}</span>
                </p>
              </div>
            </blockquote>
          </div>

          {/* Card 3 */}
          <div className="bg-[var(--color-sub)] p-16 rounded-[24px]">
            <blockquote className="text-center relative">
              <div>
                <h6 className="text-3xl font-bold text-[var(--easylook-text-primary)] mb-6">
                  {t('cards.3.title')}
                </h6>
                <p className="relative text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
                  <LuQuote className="absolute top-0 right-0 transform translate-x-4 -translate-y-12 text-[120px] text-[var(--easylook-text-primary)] opacity-5" />
                  <span className="relative z-10">{t('cards.3.quote')}</span>
                </p>
              </div>
            </blockquote>
          </div>

          {/* Card 4 */}
          <div className="bg-[var(--color-sub)] p-16 rounded-[24px]">
            <blockquote className="text-center relative">
              <div>
                <h6 className="text-3xl font-bold text-[var(--easylook-text-primary)] mb-6">
                  {t('cards.4.title')}
                </h6>
                <p className="relative text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
                  <LuQuote className="absolute top-0 right-0 transform translate-x-4 -translate-y-12 text-[120px] text-[var(--easylook-text-primary)] opacity-5" />
                  <span className="relative z-10">{t('cards.4.quote')}</span>
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Development History Section */}
      <div className="about-history-container max-w-[1200px] mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-start">
          {/* Image Column */}
          <div className="w-full h-full min-h-[400px] lg:min-h-0 relative rounded-3xl overflow-hidden shadow-lg lg:sticky lg:top-24">
            <img
              src="https://gw-static.laifen.net/static/laifen-website-ui/8bfb6537/static/webp/joinus-bb316190.webp"
              alt="Development History"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Timeline Column */}
          <div className="p-4 lg:p-0">
            <div className="mb-8">
              <h3 className="text-xl font-bold uppercase tracking-wider text-[var(--easylook-text-primary)] border-l-4 border-slate-900 pl-4">
                {t('history.title')}
              </h3>
            </div>
            <div className="space-y-0 relative ml-2">
              {['2018', '2019', '2020', '2021', '2022', '2023', '2024'].map(
                (year) => (
                  <div key={year} className="relative">
                    <div className="flex items-center gap-4">
                      <div className="w-[4px] h-[4px] rounded-full bg-black shrink-0 relative z-10"></div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-xl font-bold text-[var(--easylook-text-primary)] leading-none">
                          {year} {t('history.yearSuffix')}
                        </span>
                        <span className="text-lg font-bold text-[var(--easylook-text-primary)] leading-none">
                          {t(`history.timeline.${year}.title`)}
                        </span>
                      </div>
                    </div>
                    <div className="ml-0 border-l border-slate-900 pl-4 pb-12 ml-[1px] mb-2">
                      <p className="text-base text-[var(--text-secondary)] leading-relaxed my-2">
                        {t(`history.timeline.${year}.desc`)}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: t('breadcrumbs') }]} />
    </div>
  );
};

export default About;
