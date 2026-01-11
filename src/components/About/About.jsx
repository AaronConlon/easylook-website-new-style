import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PiQuotesFill, PiX, PiHouse } from 'react-icons/pi';

const About = () => {
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
        <title>关于视立优 - 视立优 EASYLOOK</title>
        <meta
          name="description"
          content="上海惟爱医疗科技有限公司是一家专注于眼科全产业链的医疗科技公司，旗下品牌视立优致力于提供高品质、专业化的视功能产品，守护您的视界健康。"
        />
      </Helmet>

      {/* Header Section */}
      <div className="about-header flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">视立优</h1>
        <p className="text-xl sm:text-2xl text-slate-600 font-normal text-center max-w-2xl mb-12">
          专业的视力保护解决方案提供商，守护您的视界健康。
        </p>
        <div className="max-w-4xl mx-auto space-y-6 text-slate-600 leading-relaxed text-justify px-4">
          <p>
            上海惟爱医疗科技有限公司是一家专注于眼科全产业链的医疗科技公司，总部位于上海市。公司业务触及多个领域，主营眼视光产品自研、线下实体诊所、医疗软件研发和销售、医疗设备及产品供应链、会务会展承办等。
          </p>
          <p>
            惟爱医疗深耕于眼视光医疗行业，旗下品牌有惟爱视觉 (FEAL
            VISION)，致力于为大众提供近视防控、行为视光、视觉康复、成人视疲劳等各类眼视光前沿性产品；并通过科普宣传、优医推荐以及大数据分析进行个性化的眼视光健康服务；视立优
            EASYLOOK
            致力于提供高品质、专业化的视功能产品，推动视健康发展，为全民创造美好生活！不仅如此，视立优专为斜弱视问题、学习阅读障碍、提升专注力等问题提供解决方案，是追求视觉健康家庭的理想选择！
          </p>
          <p>
            公司的产品主要应用于白内障、青光眼、近视眼、远视眼等眼科疾病的治疗和诊断。该公司的技术团队由一批具有多年经验的医学、工程和管理专业人士组成。通过持续不断的研发和创新，旨在为中国及全球的眼科医疗事业做出贡献。
          </p>
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
              观看视立优品牌影片
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
            <PiX size={40} />
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
          <div className="bg-slate-50 p-16 rounded-[24px]">
            <blockquote className="text-center relative">
              <div>
                <h6 className="text-3xl font-bold text-black mb-6">自产自研</h6>
                <p className="relative text-lg text-slate-700 leading-relaxed font-normal">
                  <PiQuotesFill className="absolute top-0 right-0 transform translate-x-4 -translate-y-12 text-[120px] text-slate-200 opacity-50" />
                  <span className="relative z-10">
                    “我们致力于突破更多技术壁垒，将更多能为大众生活提高品质的研究成果与产品带给用户。”
                  </span>
                </p>
              </div>
            </blockquote>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50 p-16 rounded-[24px]">
            <blockquote className="text-center relative">
              <div>
                <h6 className="text-3xl font-bold text-black mb-6">专注细节</h6>
                <p className="relative text-lg text-slate-700 leading-relaxed font-normal">
                  <PiQuotesFill className="absolute top-0 right-0 transform translate-x-4 -translate-y-12 text-[120px] text-slate-200 opacity-50" />
                  <span className="relative z-10">
                    “让用户从产品细节上感受到生活品质的提升，这就是我们以创新重塑生活的初心。”
                  </span>
                </p>
              </div>
            </blockquote>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50 p-16 rounded-[24px]">
            <blockquote className="text-center relative">
              <div>
                <h6 className="text-3xl font-bold text-black mb-6">探索极致</h6>
                <p className="relative text-lg text-slate-700 leading-relaxed font-normal">
                  <PiQuotesFill className="absolute top-0 right-0 transform translate-x-4 -translate-y-12 text-[120px] text-slate-200 opacity-50" />
                  <span className="relative z-10">
                    “各类测试，不仅是为了安全，也是探索产品的极致。”
                  </span>
                </p>
              </div>
            </blockquote>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-50 p-16 rounded-[24px]">
            <blockquote className="text-center relative">
              <div>
                <h6 className="text-3xl font-bold text-black mb-6">
                  提供最优解
                </h6>
                <p className="relative text-lg text-slate-700 leading-relaxed font-normal">
                  <PiQuotesFill className="absolute top-0 right-0 transform translate-x-4 -translate-y-12 text-[120px] text-slate-200 opacity-50" />
                  <span className="relative z-10">
                    “工业设计是寻找和解决问题的过程，通过创新和验证找到产品的最优解。”
                  </span>
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
              <h3 className="text-xl font-bold uppercase tracking-wider text-slate-900 border-l-4 border-slate-900 pl-4">
                发展历程
              </h3>
            </div>
            <div className="space-y-0 relative ml-2">
              {/* Timeline Item 2018 */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="w-[4px] h-[4px] rounded-full bg-black shrink-0 relative z-10"></div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-xl font-bold text-slate-900 leading-none">
                      2018 年
                    </span>
                    <span className="text-lg font-bold text-slate-900 leading-none">
                      公司成立
                    </span>
                  </div>
                </div>
                <div className="ml-0 border-l border-slate-900 pl-4 pb-12 ml-[1px] mb-2">
                  <p className="text-base text-slate-600 leading-relaxed my-2">
                    上海惟爱医疗科技有限公司正式成立，专注眼科医疗科技领域。
                  </p>
                </div>
              </div>

              {/* Timeline Item 2019 */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="w-[4px] h-[4px] rounded-full bg-black shrink-0 relative z-10"></div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-xl font-bold text-slate-900 leading-none">
                      2019 年
                    </span>
                    <span className="text-lg font-bold text-slate-900 leading-none">
                      产品研发
                    </span>
                  </div>
                </div>
                <div className="ml-0 border-l border-slate-900 pl-4 pb-12 ml-[1px] mb-2">
                  <p className="text-base text-slate-600 leading-relaxed my-2">
                    启动视立优品牌，开始视觉训练产品的研发工作。
                  </p>
                </div>
              </div>

              {/* Timeline Item 2020 */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="w-[4px] h-[4px] rounded-full bg-black shrink-0 relative z-10"></div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-xl font-bold text-slate-900 leading-none">
                      2020 年
                    </span>
                    <span className="text-lg font-bold text-slate-900 leading-none">
                      市场拓展
                    </span>
                  </div>
                </div>
                <div className="ml-0 border-l border-slate-900 pl-4 pb-12 ml-[1px] mb-2">
                  <p className="text-base text-slate-600 leading-relaxed my-2">
                    产品正式上市，建立全国销售网络和服务体系。
                  </p>
                </div>
              </div>

              {/* Timeline Item 2021 */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="w-[4px] h-[4px] rounded-full bg-black shrink-0 relative z-10"></div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-xl font-bold text-slate-900 leading-none">
                      2021 年
                    </span>
                    <span className="text-lg font-bold text-slate-900 leading-none">
                      技术突破
                    </span>
                  </div>
                </div>
                <div className="ml-0 border-l border-slate-900 pl-4 pb-12 ml-[1px] mb-2">
                  <p className="text-base text-slate-600 leading-relaxed my-2">
                    获得多项专利技术，产品获得医疗器械认证。
                  </p>
                </div>
              </div>

              {/* Timeline Item 2022 */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="w-[4px] h-[4px] rounded-full bg-black shrink-0 relative z-10"></div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-xl font-bold text-slate-900 leading-none">
                      2022 年
                    </span>
                    <span className="text-lg font-bold text-slate-900 leading-none">
                      规模扩张
                    </span>
                  </div>
                </div>
                <div className="ml-0 border-l border-slate-900 pl-4 pb-12 ml-[1px] mb-2">
                  <p className="text-base text-slate-600 leading-relaxed my-2">
                    业务覆盖全国主要城市，服务用户超过 10 万人。
                  </p>
                </div>
              </div>

              {/* Timeline Item 2023 */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="w-[4px] h-[4px] rounded-full bg-black shrink-0 relative z-10"></div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-xl font-bold text-slate-900 leading-none">
                      2023 年
                    </span>
                    <span className="text-lg font-bold text-slate-900 leading-none">
                      品牌升级
                    </span>
                  </div>
                </div>
                <div className="ml-0 border-l border-slate-900 pl-4 pb-12 ml-[1px] mb-2">
                  <p className="text-base text-slate-600 leading-relaxed my-2">
                    完成品牌升级，推出新一代智能化产品。
                  </p>
                </div>
              </div>

              {/* Timeline Item 2024 */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="w-[4px] h-[4px] rounded-full bg-black shrink-0 relative z-10"></div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-xl font-bold text-slate-900 leading-none">
                      2024 年
                    </span>
                    <span className="text-lg font-bold text-slate-900 leading-none">
                      国际化发展
                    </span>
                  </div>
                </div>
                <div className="ml-0 border-l border-transparent pl-8 pb-0">
                  <p className="text-base text-slate-600 leading-relaxed my-2">
                    启动国际化战略，产品出口多个国家和地区。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-[1200px] mx-auto px-4 mb-20">
        <div className="flex items-center gap-2 text-sm text-gray-500 border-t border-gray-100 pt-8">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-gray-900 transition-colors"
          >
            <PiHouse size={16} />
            <span>首页</span>
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-900">关于视立优</span>
        </div>
      </div>
    </div>
  );
};

export default About;
