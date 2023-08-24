import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utils/motion"

export const TiltCard = ({title, index=1, imgIcon}) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className={`w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card`}
            >
                <div
                options={{
                    max:45,
                    scale:1,
                    speed:450
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img src={imgIcon} alt={title}
                    className="w-full h-full object-contain"/>
                    <h3 className="text-text text-[20px] font-bold text-center">{title}</h3>
                </div>

            </motion.div>
        </Tilt>
        )
}

