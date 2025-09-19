import React from 'react';
import img1 from '../assets/Stress-amico.png'
import img2 from '../assets/Stress-pana.png'
import img3 from '../assets/Worried-amico.png'
import img4 from '../assets/Worried-rafiki.png'

const Hero = () => {
    return (
        <div className='flex justify-center items-center gap-4 my-10 px-10'>
            <div className='w-1/2'>
                <div className="carousel w-full h-[500px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src={img1}
                            className="w-full object-contain" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src={img2}
                            className="w-full object-contain" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src={img3}
                            className="w-full object-contain" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src={img4}
                            className="w-full object-contain" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <h2 className='text-4xl font-bold text-height: 1.4; mb-4 text-purple-700'>
                    মানসিক স্বাস্থ্য সেবা <br />
                    আপনার হাতের মুঠোয়
                    
                </h2>
                <p>অভিজ্ঞ ডাক্তারদের সাথে সরাসরি যোগাযোগ করুন এবং উন্নত স্বাস্থ্য সেবা পান। যেকোনো সময়, যেকোনো জায়গা থেকে।</p>
            </div>
        </div>

    );
};

export default Hero;