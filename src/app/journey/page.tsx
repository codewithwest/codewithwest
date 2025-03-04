
import ThemedContainer from "@/components/general/themedContainer";
import ThemeProvider from "@/provider/general/themeProvider";

type journeyItemType = {
    date_interval: string,
    title: string,
    description: string,
    link: string
}
const Journey = () => {
    const date = new Date();
    const journey = [
        {
            date_interval: `September 2023 - ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`,
            title: "Backend Developer [Vaimo]",
            description: `Provided technical support for Vaimo's e-commerce platform, leveraging expertise in 
                            [Magento, PHP, MySQL, Python, Node, React, Next]. Responsibilities included:
                            Troubleshooting and resolving complex technical issues related to [platform 
                            performance, API integrations, payment gateways]. Utilizing [Jira, K9s, 
                            Grafana, OpenLens] to diagnose and resolve client issues. Collaborating with 
                            development teams to address and resolve software bugs, and providing technical 
                            guidance and support to clients.`,
            link: "https://www.vaimo.com",
            type: "work"
        },
        {
            date_interval: "October 2022- September 2023",
            title: "Full Stack Engineer (Sci-Bono Discovery Centre)",
            description: "Work integrated Learning, Designed and developed comprehensive web and mobile application solutions, encompassing both front-end \
            and back-end development. Created interactive user interfaces with React and Bootstrap, and built robust back-end systems \
            using PHP, MySQL, Laravel, and Django. Developed detailed application mockups, ensuring seamless user experiences and \
            efficient database management.",
            link: "#",
            type: "work"
        },

        {
            date_interval: "May 2022- December 2022",
            title: "Google IT Support Professional Certificate (Coursera)",
            description: "Completed the Google IT Support Professional Certificate, building a strong foundation in core IT \
            support principles. Developed practical skills in troubleshooting, customer service, network administration, \
            operating systems, system administration, and security. Demonstrated proficiency through hands-on assessments, \
            gaining experience in real-world IT support scenarios.",

            link: "https://www.credly.com/badges/7b8af752-a683-4ab5-a556-52f03d60648e/public_url",
            type: "education"
        },
        {
            date_interval: "December 2022- May 2023",
            title: "Google IT Automation with Python Professional Certificate (Coursera)",
            description: "Completed the Google IT Automation with Python Professional Certificate, gaining expertise in IT \
            support, troubleshooting, and system administration. Developed proficiency in Python for automation, including \
            cloud automation with Google Cloud Platform, configuration management with Puppet, network administration, \
            operating systems, and security practices. Applied practical skills through hands-on assessments and projects, \
            demonstrating the ability to automate routine tasks and improve system efficiency.",
            link: "https://www.credly.com/badges/5b7b8c9c-2a8b-4a93-af06-b63d1d9a1c67/public_url",
            type: "education"
        },
        {
            date_interval: "May 2023- September 2023",
            title: "Meta Back-End Developer [Coursera]",
            description:  "Developed a robust foundation in back-end engineering through the Meta Back-End Developer Certificate \
            program on Coursera. Mastered Python and the Django framework, and gained practical experience with \
            relational (SQL) and NoSQL databases. Designed and implemented a fully functional e-commerce platform API, \
            showcasing expertise in RESTful API design, user authentication, and efficient data modeling. Achieved \
            top-tier project performance, demonstrating a commitment to high-quality code and problem-solving. \
            Eager to leverage these skills to contribute to impactful projects in a dynamic development environment.",
            link: "https://www.credly.com/badges/8ae43192-eb9f-4f39-adac-88ea938fbf24/public_url",
            type: "education"
        },
        {
            date_interval: "May 2023- September 2023",
            title: "Mobile Development with React Native Certificate (MTN Business Academy)",
            description: "Completed a comprehensive NQF Level 5 certificate program focused on full-stack mobile development using React Native. \
            Gained proficiency in building cross-platform applications, integrating Firebase for backend services, and mastering core front-end \
            design principles. Developed critical problem-solving, presentation, and mathematical skills essential for effective software development. \
            Designed and deployed a [Mention a specific project or type of project, e.g., 'real-time chat application'] demonstrating practical \
            application of learned skills.",
            link: "#",
            type: "education"
        },
        {
            date_interval: "2017",
            title: "Matriculation Certificate (National Senior Certificate) - Millennium Combined School",
            description: "Completed National Senior Certificate (Matric) with a focus on Mathematics and Physical Science.",
            link: "#",
            type: "education"
        }

    ]


    const journeyListItem = (journeyItem: journeyItemType, index: number) => {
        return (
            <li className="mb-10 ms-4" key={index}>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{journeyItem?.date_interval}</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{journeyItem.title}</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{journeyItem.description}</p>
                {journeyItem.link == "#" ? null :
                <a href={journeyItem.link} target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 
                bg-white border border-current rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 
                focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 
                dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">See more
                <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg></a>}
            </li>
        )
    }

    return (
        <ThemeProvider>
            <ThemedContainer className="w-full flex"> 
                <h1 className="text-2xl m-auto font-bold mb-4">My Journey</h1>
            </ThemedContainer>
            <ThemedContainer className="w-full max-w-3xl px-4 py-16 mx-auto">
                <h2 className="text-xl font-bold mb-4">Work Experience</h2>
                <ol className="relative border-s border-gray-200 dark:border-gray-700 mb-8">
                    {
                        journey.filter(item => item.type === "work").map(
                            (journeyItem: journeyItemType, index: number) => journeyListItem(journeyItem, index)
                        )
                    }
                </ol>
                <h2 className="text-xl font-bold mb-4">Education</h2>
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    {
                        journey.filter(item => item.type === "education").map(
                            (journeyItem: journeyItemType, index: number) => journeyListItem(journeyItem, index) 
                        )
                    }
                </ol>
            </ThemedContainer>
            </ThemeProvider>
            );

}

export default Journey;