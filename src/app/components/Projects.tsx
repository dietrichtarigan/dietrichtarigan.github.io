import { useState } from "react";
import kerrImage from "../../imports/image-1.png";
import ivMeasurementImage from "../../imports/image-2.png";
import fetMeasurementImage from "../../imports/image-3.png";
import doublePendulumImage from "../../imports/image.png";
import iotHealthImage1 from "../../imports/image-4.png";
import iotHealthImage2 from "../../imports/iot-health-2.jpeg";
import tempControlImage1 from "../../imports/image-5.png";
import tempControlImage2 from "../../imports/image-6.png";
import tempControlImage3 from "../../imports/image-7.png";

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({});
  const previewLength = 520;

  const getPreviewText = (text: string) => {
    if (text.length <= previewLength) return text;

    const sliced = text.slice(0, previewLength);
    const lastSpaceIndex = sliced.lastIndexOf(" ");
    const safeCut = lastSpaceIndex > 0 ? lastSpaceIndex : previewLength;
    return `${sliced.slice(0, safeCut)}...`;
  };

  const toggleProjectDescription = (index: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const projects = [
    {
      title: "Kerr Contrast ROI Analyzer for MOKE Video Experiments",
      description: "During my internship at the National Research and Innovation Agency in Indonesia (BRIN), I built this GUI to analyze the Region of Interest (ROI) in the Magnetic-Optic Kerr Microscopy video to study the Kerr contrast during magnetic field sweeps. This application provides real-time video preview, interactive ROI selection, automatic frame processing, and data visualization for magneto-optical research applications. I built this with Python, OpenCV, numpy, pandas, matplotlib, and the tkinter module for the GUI.",
      tags: ["Python", "OpenCV", "MOKE", "Tkinter", "Data Visualization", "GUI"],
      image: kerrImage,
      links: [
        { label: "Source Code", url: "https://github.com/dietrichtarigan/Kerr-Contrast-ROI-Analyzer-for-MOKE-Video-Experiments" }
      ]
    },
    {
      title: "Keithley 2450 SMU I-V Curve Measurement Application",
      description: "During my internship at the National Research and Innovation Agency in Indonesia (BRIN), I built a modular, fully configurable GUI application for I-V curve measurements using the Keithley 2450 Source Measure Unit (SMU) through a GPIB interface. The application lets users perform voltage sweeps, measure currents, calculate resistances, and visualize I-V curves in real time. It was tested on a diode, and the results closely matched the SMU data, with the I-V curve updating smoothly and accurately.",
      tags: ["Python", "Keithley 2450", "GPIB", "I-V Measurement", "Tkinter", "Real-time Visualization"],
      image: ivMeasurementImage,
      links: [
        { label: "Source Code", url: "https://github.com/dietrichtarigan/Keithley-2450-I-V-Measurement-Program" }
      ]
    },
    {
      title: "Keithley 2450 SMU FET Measurement Application",
      description: "During my internship at the National Research and Innovation Agency in Indonesia (BRIN), I also built a multi-threaded GUI application using Tkinter to automate the electrical characterization of Field-Effect Transistors (FETs). The application uses the pyvisa library to communicate with Keithley 2450 SourceMeter instruments via GPIB, running programmable ID-VD and ID-VG voltage sweeps in background threads to keep the interface responsive. As the sweeps run, the application logs voltage and current data to CSV files using Pandas and provides live, real-time visual feedback of the measurements via dynamic Matplotlib plots.",
      tags: ["Python", "FET Characterization", "Keithley 2450", "Multi-threading", "PyVISA", "Matplotlib"],
      image: fetMeasurementImage,
      links: [
        { label: "Source Code", url: "https://github.com/dietrichtarigan/FET-measurement" }
      ]
    },
    {
      title: "Interactive Double-Pendulum Laboratory: A C++ GUI Simulation and Control System",
      description: "I built a digital and interactive double-pendulum laboratory in C++ using ImGui and SFML, integrating physics, control engineering, and real-time visualization. It simulates nonlinear dynamics and allows users to switch between uncontrolled, passive, PID, and LQR controllers. The ImGui-based GUI enables live parameter tuning, while custom charts plot angles, angular velocities, torques, and energy with axis-aware scaling. The pendulum's motion and trail are rendered using SFML. In addition to being a powerful simulator, the platform also serves as an experimental tool, automatically running method comparisons, exporting data in CSV format, capturing screenshots, and performing grid search optimization to find optimal initial conditions.\n\nThrough this project, I learned that the double-pendulum system is highly nonlinear and very sensitive to its starting conditions. Large angles lead to chaotic motion, while small angles cause only mild swings. To manage this instability, I found that active control methods such as LQR and PID were much faster and more effective at restoring balance than passive damping. Of the active methods, LQR worked best because it stabilized the system quickly and reliably, with less overshoot and fewer actuator problems than PID.",
      tags: ["C++", "Control Systems", "LQR", "PID", "ImGui", "SFML", "Nonlinear Dynamics"],
      image: doublePendulumImage,
      links: [
        { label: "Source Code", url: "https://github.com/dietrichtarigan/double-pendulum-control-sim" }
      ]
    },
    {
      title: "IoT-Based Smart Health Monitoring System",
      description: "I led a cross-disciplinary team to design and build an IoT-based smart health monitoring system that bridges hardware sensing, embedded programming, and web-based data visualization. The system integrates multiple environmental and motion sensors—including pressure, temperature, humidity, and an Inertial Measurement Unit (IMU)—connected to an ESP32 microcontroller for real-time data acquisition and wireless transmission.\n\nThe core challenge was not just collecting sensor data, but making it meaningful and actionable. We built a real-time web dashboard that visualizes the incoming data streams and incorporates AI-driven risk analysis to detect abnormal patterns and generate health alerts. This required careful coordination between firmware development, network protocols, backend processing, and frontend design.\n\nThrough this project, I learned how to manage technical complexity across multiple domains—from low-level sensor calibration and microcontroller programming to cloud integration and user interface design. It was also my first experience leading a team through the full product development cycle, from initial concept and prototyping to final deployment and testing. The project taught me that successful IoT systems depend as much on thoughtful system architecture and data interpretation as they do on individual component performance.",
      tags: ["IoT", "ESP32", "Embedded Systems", "Web Dashboard", "AI", "Sensors", "Real-time Data", "Team Leadership"],
      images: [iotHealthImage1, iotHealthImage2],
      links: []
    },
    {
      title: "End-to-End Smart Temperature Control System with Real-Time PID Tuning",
      description: "I designed and built an End-to-End Smart Temperature Control System prototype as a final project for the Instrumentation Systems & Measurement Methods course, developing both hardware and software independently from scratch. The system integrates temperature sensing using an Arduino Uno, a Wheatstone bridge, and operational amplifiers for data acquisition, along with a custom-implemented PID (Proportional-Integral-Derivative) control algorithm directly coded on the microcontroller.\n\nTo ensure highly accurate and adaptive temperature readings, I applied a Moving Average Filter and real-time linear regression, and developed an interactive dashboard that visualizes temperature dynamics and enables on-the-fly PID parameter tuning from the user interface. The entire system is engineered to achieve high-precision temperature stabilization, emphasizing automation, flexibility, and real-time control optimization.",
      tags: ["Arduino", "PID Control", "Instrumentation", "Real-time Systems", "Signal Processing", "Embedded C", "Data Visualization"],
      images: [tempControlImage1, tempControlImage2, tempControlImage3],
      links: []
    },
    {
      title: "Past Projects Portfolio",
      description: "A comprehensive collection of additional projects and technical work across various domains including research, embedded systems, and software development.",
      tags: ["Portfolio", "Research", "Projects"],
      links: [
        { label: "View Projects", url: "https://docs.google.com/document/d/1HrwtWMSKBBT52-ppdkJD0z8S_3enau5sti-rqnimp20/edit?usp=sharing" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl text-gray-900 mb-10">Selected projects</h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              {/** Images */}
              {project.image && (
                <div className="mb-6 rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-52 md:h-64 object-contain bg-gray-50"
                  />
                </div>
              )}

              {project.images && project.images.length > 0 && (
                <div className="mb-6">
                  {project.images.length === 1 && (
                    <div className="rounded-lg overflow-hidden border border-gray-200">
                      <img
                        src={project.images[0]}
                        alt={`${project.title} - Image 1`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-52 md:h-64 object-contain bg-gray-50"
                      />
                    </div>
                  )}
                  {project.images.length === 2 && (
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="rounded-lg overflow-hidden border border-gray-200">
                          <img
                            src={img}
                            alt={`${project.title} - Image ${imgIndex + 1}`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-40 md:h-48 object-contain bg-gray-50"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {project.images.length >= 3 && (
                    <div className="space-y-4">
                      <div className="rounded-lg overflow-hidden border border-gray-200">
                        <img
                          src={project.images[0]}
                          alt={`${project.title} - Image 1`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-48 md:h-56 object-contain bg-gray-50"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.images.slice(1).map((img, imgIndex) => (
                          <div key={imgIndex + 1} className="rounded-lg overflow-hidden border border-gray-200">
                            <img
                              src={img}
                              alt={`${project.title} - Image ${imgIndex + 2}`}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-36 md:h-44 object-contain bg-gray-50"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/** Content */}
              <h3 className="text-xl text-gray-900 mb-4">{project.title}</h3>

              {(() => {
                const isExpanded = !!expandedProjects[index];
                const isLongDescription = project.description.length > previewLength;
                const displayedText = isExpanded || !isLongDescription
                  ? project.description
                  : getPreviewText(project.description);

                return (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-3 whitespace-pre-line">{displayedText}</p>
                    {isLongDescription && (
                      <button
                        type="button"
                        onClick={() => toggleProjectDescription(index)}
                        className="mb-6 text-sm font-medium text-[#1e3a8a] hover:underline"
                      >
                        {isExpanded ? "Show less" : "Read more"}
                      </button>
                    )}
                    {!isLongDescription && <div className="mb-6" />}
                  </>
                );
              })()}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.links && project.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1e3a8a] hover:underline"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
