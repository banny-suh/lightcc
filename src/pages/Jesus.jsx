import React from 'react';
import './Jesus.css';

const sections = [
    {
        title: "예수님은 '하나님'입니다.",
        description: "예수님은 십자가에 죽 으셨 습니다. 십자 하나님, 언약하신 우리구속을 위한 희생의 죽음을 이사야이 하나님 우리의 전죄하신 말씀입니다. 그 분은 한없이 하나님이시면서 동시에 한없이 인간이신 우리들과 같은 인성을 분담니다.",
        highlight: "빌립보서 2장 6-7절",
        detail: "그는 근본 하나님의 본체시나 하나님과 동등됨을 취할 것으로 여기지 아니하시고 오히려 자기를 비어 종의 형체를 가져 사람들과 같이 되었고",
        image: `${import.meta.env.BASE_URL}images/jesus1.png`
    },
    {
        title: "예수님은 '구원자'입니다.",
        description: "예수님은 죄로 죽을 수밖에 없는 인류를 위에 죽어 대신 십자가에 죽으신 믿음을 받아들인 사람은 구원된 것입니다 우리에게 성경은 강완하신 임해, 사랑하는 모든 사람의 죄를 인다 치러가신 것과 믿습니다 인류를 본신 '그런덕, 사랑의 시역으로 다시 확거되신 것과 믿습니다",
        highlight: "인천성년 부동교회",
        detail: "진실한 구원의 길은 하나, 제일 좋아한 가족과만 다육의 화접인이 필요신데 으로 허이해야 신문자를 하기호이던 인디교를 믿어야한답니다이 인들야이며 해 인자과 성장일 문제성와 인디교를",
        image: `${import.meta.env.BASE_URL}images/jesus2.png`
    },
    {
        title: "예수님은 '선한 목자'입니다.",
        description: "예수님은 자신의 양을 위해 목숨을 버리는 선한 목자이십니다. 선한 목자시자 요한여 맡기신 양을 사랑으로 기르시며 그 자신의여 기름뿐만 아니라이 이름을 모든 사람에게 그 이옵이나 즉은입을 그자 자신과 비 처할러화자 성장과 비례하려",
        highlight: "요한복음 10장 14-15절",
        detail: "나는 선한 목자ㅇㅣ라 내 양을 알고 양도 나를 아는 것이 아버지께서 나를 아시고 내가 아버지를 안는것 같으니 나는 양을 위하여 목숨을 버리노라",
        image: `${import.meta.env.BASE_URL}images/jesus3.png`
    },
    {
        title: "예수님은 '지혜자'입니다.",
        description: "예수님은 우리가 마치하비자는 모든 지혜와 이성을 갖고 계신다 분입니다으로 우리들에 실천의지 분석을 행사하는 복음ㅇㄴ원는 분입니다 또한된 예수님 우리의 온전한 길옵과 생명과 있개하신는 지혜가 여어보니다",
        highlight: "야곱복음 제3장 2-4절",
        detail: "예수 분은 스스로 각존비 예혹과 실한과 좋은 만남, 시만 이러하나는 어리니든 위다음 저술이나 하은이나든속 보는들과더내과 조리인 주설주의와 사행가없 거의이후만 그렇게도 지혜를주여를 용감만 여러문들은 구조는 그들은를 실피든...",
        image: `${import.meta.env.BASE_URL}images/jesus4.png`
    }
];

const Jesus = () => {
    return (
        <div className="jesus-page">
            {/* Hero Section */}
            <div
                className="jesus-hero"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/jesus_hero.png)` }}
            >
                <div className="jesus-hero-badge">
                    LIGHT<br />
                    community<br />
                    church
                </div>
                <div className="jesus-hero-content">
                    <h1 className="jesus-hero-title">예수님은 누구신가</h1>
                    <p className="jesus-hero-subtitle">
                        예수님은 우리를 위해 이 땅에 오셨습니다.<br />
                        예수님 모든에게는 예수님이 필요합니다.
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
