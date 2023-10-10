"use client";

import React from "react";

import {VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./section_heading";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme_context";


export default function Experience() {
    const { ref } = useSectionInView("Experience");
    const {theme} = useTheme()
    return (
        <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading>Expérience</SectionHeading>
            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible={true}
                            contentStyle={{
                                background: theme === "light" ? "#edeef0" : "rgba(255,255,255,0.10",
                                boxShadow: "none",
                                border: theme === "light" ? "1px solid rgba(0, 0, 0, 0.05" : "1px solid rgba(255,255,255,.20)",
                                textAlign: "left",
                                padding: "1.3rem 2rem"
                            }
                            }
                            contentArrowStyle={{
                                borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255,255,255,0.5 "
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: theme === "light" ? "white" : "rgba(255,255,255,0.15",
                                fontSize:"1.5rem",
                            }}
                        >
                        <h3 className="font-semibold capitalize">{item.title}</h3>
                        <p className="font-normal !mt-0">{item.location}</p>
                        <p className="!mt-1 !font-normal text-gray-600 dark:text-white/80">{item.description}</p>
                    </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}