import React from 'react';
import './Jesus.css';

const sections = [
    {
        title: "예수님은 '하나님'입니다.",
        description: "예수님은 삼위일체 즉 성부 하나님, 성자 예수님, 성령님의 한 위격으로 영원 전부터 함께 하시며 세상과 우리를 창조하신 분입니다. 그 분은 완전한 하나님이시며 동시에 완전한 인간으로 우리를 위해 이 땅에 오신 분입니다.",
        highlight: "빌립보서 2장 6-7절",
        detail: "그는 근본 하나님의 본체시나 하나님과 동등됨을 취할 것으로 여기지 아니하시고, 오히려 자기를 비워 종의 형체를 가지사 사람들과 같이 되셨고",
        image: `${import.meta.env.BASE_URL}images/jesus1.jpg`
    },
    {
        title: "예수님은 '구원자'입니다.",
        description: "예수님은 죄로 죽을 수밖에 없는 우리를 위해 속죄 제물로 십자가에 달려 돌아가신 분입니다. 우리에게 영원한 생명을 주시기 위해 다시 살아나신 분이십니다. 이를 믿고 고백하는 사람은 다시 하나님의 자녀가 됩니다.",
        highlight: "히브리서 12장 2절",
        detail: "믿음의 주요 또 온전하게 하시는 이인 예수를 바라보자 그는 그 앞에 있는 기쁨을 위하여 십자가를 참으사 부끄러움을 개의치 아니하시더니 하나님 보좌 우편에 앉으셨느니라",
        image: `${import.meta.env.BASE_URL}images/jesus2.jpg`
    },
    {
        title: "예수님은 '선한 목자'입니다.",
        description: "예수님은 자신의 양을 위해 목숨을 버리는 선한 목자처럼 우리를 다시 얻기 위해 자신의 목숨을 내어주신 분입니다. 우리에게 참된 사랑을 가르치시고 그 사랑으로 이끄시는 분입니다. 예수님의 말씀을 듣고 따를 때 우리의 영혼은 안전합니다.",
        highlight: "요한복음 10장 14-15절",
        detail: "나는 선한 목자라 나는 내 양을 알고 양도 나를 아는 것이, 아버지께서 나를 아시고 내가 아버지를 아는 것 같으니 나는 양을 위하여 목숨을 버리노라",
        image: `${import.meta.env.BASE_URL}images/jesus3.jpg`
    },
    {
        title: "예수님은 '치료자'입니다.",
        description: "예수님은 우리가 마주하는 모든 고통과 아픔을 먼저 경험하신 분입니다. 상처받은 치료자로 우리의 육체와 영혼을 회복시켜주시는 분입니다 우리는 예수님을 통해서 온전한 회복을 경험할 수 있습니다",
        highlight: "마태복음 4장 23-24절",
        detail: "예수께서 온 갈릴리에 두루 다니사 그들의 회당에서 가르치시며 천국 복음을 전파하시며 백성 중의 모든 병과 모든 약한 것을 고치, 그의 소문이 온 수리아에 퍼진지라 사람들이 모든 앓는 자 곧 각종 병에 걸려서 고통 당하는 자, 귀신 들린 자, 간질하는 자, 중풍병자들을 데려오니 그들을 고치시더라",
        image: `${import.meta.env.BASE_URL}images/jesus4.jpg`
    }
];

const Jesus = () => {
    return (
        <div className="jesus-page">
            {/* Hero Section */}
            <div
                className="jesus-hero"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/jesus_hero.jpg)` }}
            >
                <div className="jesus-hero-content">
                    <h1 className="jesus-hero-title">예수님은 누구신가</h1>
                    <p className="jesus-hero-subtitle">
                        예수님은 우리를 위해 이 땅에 오셨습니다.<br />
                        <strong>우리 모두에게는 예수님이 필요합니다.</strong>
                    </p>
                </div>
            </div>

            {/* Content Sections */}
            <div className="jesus-content">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className={`jesus-section ${index % 2 === 1 ? 'reverse' : ''}`}
                    >
                        <div
                            className="jesus-section-image"
                            style={{ backgroundImage: `url(${section.image})` }}
                        ></div>

                        <div className="jesus-section-content">
                            <h2 className="jesus-section-title">{section.title}</h2>
                            <p className="jesus-section-description">{section.description}</p>
                            <p className="jesus-section-highlight">{section.highlight}</p>
                            <p className="jesus-section-detail">{section.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Jesus;
