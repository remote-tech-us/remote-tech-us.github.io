// src/components/Carousel.jsx
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaPhone, FaMapMarkerAlt, FaComment, FaRegCalendarAlt, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { QRCodeSVG } from 'qrcode.react'; // Install: npm install qrcode.react

const Carousel = ({ item ,  index }) => {
  import { item.name } from {item.path};
  return (
      {/* Section: Services Carousel */}
      <section className="mb-16 w-full overflow-hidden">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="w-8 h-1 bg-blue-500 rounded-full" /> Featured Services
        </h2>
        {/* 1. 'overflow-x-auto' enables the scroll.
            2. 'flex-nowrap' prevents items from wrapping/squeezing.
            3. 'snap-x' enables the snap-to-item behavior.
        */}
        <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory scrollbar-hide">
          {SERVICES.map((service) => (
            <Card key={service.name} item={service} />
          ))}
        </div>
      </section>
  );
};

export default Carousel;

