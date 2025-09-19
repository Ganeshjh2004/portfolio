import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementCard = ({ index, title, organization, date, description, proof_link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-8 rounded-3xl xs:w-[320px] w-full"
  >
    <h3 className="text-white font-bold text-[18px]">{title}</h3>
    <p className="text-secondary text-[14px]">{organization}</p>
    <p className="text-xs text-gray-400">{date}</p>

    <p className="mt-4 text-white tracking-wider text-[15px]">{description}</p>

    {proof_link && (
      <a
        href={proof_link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300 underline"
      >
        View Certificate
      </a>
    )}
  </motion.div>
);

const Achievements = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Milestones</p>
          <h2 className={styles.sectionHeadText}>Achievements + Certifications.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {achievements.map((item, index) => (
          <AchievementCard key={index} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "");
