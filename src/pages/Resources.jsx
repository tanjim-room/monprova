import React, { useState } from 'react';

const Resources = () => {
    const [selected, setSelected] = useState(null);

    // Example content
    const articles = [
        { id: 1, title: "মানসিক চাপ মোকাবেলার ৫টি উপায়", link: "#" },
        { id: 2, title: "ঘুম এবং মানসিক স্বাস্থ্যের সম্পর্ক", link: "#" },
        { id: 3, title: "উদ্বেগ কমানোর প্রাকৃতিক উপায়", link: "#" },
    ];

    const videos = [
        { id: 1, title: "Stress Management Tips", link: "https://www.youtube.com/embed/hnpQrMqDoqE" },
        { id: 2, title: "Mindfulness Meditation Guide", link: "https://www.youtube.com/embed/w6T02g5hnT4" },
    ];

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-8">স্বাস্থ্য রিসোর্স</h2>

            {/* Resource Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
                {/* Articles */}
                <div className="card bg-white shadow-lg p-6 text-center">
                    <div className="text-5xl mb-4 text-blue-600">📖</div>
                    <h3 className="font-bold text-lg">প্রবন্ধ পড়ুন</h3>
                    <p className="text-sm text-gray-500">মানসিক স্বাস্থ্য সম্পর্কিত উপকারী লেখা</p>
                    <button
                        className="btn btn-primary mt-4"
                        onClick={() => setSelected("articles")}
                    >
                        পড়া শুরু করুন
                    </button>
                </div>

                {/* Videos */}
                <div className="card bg-white shadow-lg p-6 text-center">
                    <div className="text-5xl mb-4 text-green-600">🎥</div>
                    <h3 className="font-bold text-lg">ভিডিও দেখুন</h3>
                    <p className="text-sm text-gray-500">শিক্ষামূলক ভিডিও এবং টিউটোরিয়াল</p>
                    <button
                        className="btn btn-primary mt-4"
                        onClick={() => setSelected("videos")}
                    >
                        দেখা শুরু করুন
                    </button>
                </div>
            </div>

            {/* Show Content Based on Selection */}
            {selected === "articles" && (
                <div className="bg-white shadow p-6 rounded-xl">
                    <h3 className="text-lg font-bold mb-4">প্রবন্ধ সমূহ</h3>
                    <ul className="space-y-3">
                        {articles.map((a) => (
                            <li key={a.id}>
                                <a href={a.link} className="text-blue-600 hover:underline">
                                    📘 {a.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {selected === "videos" && (
                <div className="bg-white shadow p-6 rounded-xl">
                    <h3 className="text-lg font-bold mb-4">ভিডিও সমূহ</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {videos.map((v) => (
                            <div key={v.id} className="w-full">
                                <iframe
                                    width="100%"
                                    height="200"
                                    src={v.link}
                                    title={v.title}
                                    className="rounded-lg shadow"
                                    allowFullScreen
                                ></iframe>
                                <p className="mt-2 text-sm text-center">{v.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Resources;