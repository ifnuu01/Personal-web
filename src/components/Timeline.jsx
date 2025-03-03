import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <div className="w-full px-5 mt-4 lg:w-[60%] mx-auto">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education overflow-x-hidden"
          date="Feb 2022 - May 2022"
          contentStyle={{
            background: "#ffff",
            color: "#333",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #212529" }}
          iconStyle={{ background: "#FC882F", color: "#fff" }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
          }
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Apprenticeship
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-semibold">
            PT. TELKOM AKSES
          </h4>
          <p>
            During my internship at Telkom Indonesia, I gained hands-on
            experience in IT support, such as knowledge of fiber optic networks
            and managing customer inventory.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work overflow-x-hidden"
          date="Jul 2023 - Now"
          contentStyle={{ background: "#ffff", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  #212529" }}
          iconStyle={{ background: "#FC882F", color: "#fff" }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
          }
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Bachelor of Informatics
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-semibold">
            Universitas Mulawarman
          </h4>
          <p>
            I am currently studying at Mulawarman University, majoring in
            Informatics Engineering.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work overflow-x-hidden"
          date="Sep 2024 - Feb 2025"
          contentStyle={{ background: "#ffff", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  #212529" }}
          iconStyle={{ background: "#FC882F", color: "#fff" }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
          }
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Lab Assistant | Basic Programming Algorithms
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-semibold">
            Universitas Mulawarman
          </h4>
          <p>
            Assigned to teach in the practicum on the basic programming
            algorithm course with the Python language
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work overflow-x-hidden"
          date="March 2025 - Now"
          contentStyle={{ background: "#ffff", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  #212529" }}
          iconStyle={{ background: "#FC882F", color: "#fff" }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
          }
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Lab Assistant | Advanced Programming Algorithms
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-semibold">
            Universitas Mulawarman
          </h4>
          <p>
            Assigned to teach in the practicum on the advanced programming
            algorithm course with the C++ language
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work overflow-x-hidden"
          date="March 2025 - Now"
          contentStyle={{ background: "#ffff", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  #212529" }}
          iconStyle={{ background: "#FC882F", color: "#fff" }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
          }
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Lab Assistant | Computer Network
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-semibold">
            Universitas Mulawarman
          </h4>
          <p>
            Assigned to teach practical work on Computer Networks courses using
            eNSP software
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
