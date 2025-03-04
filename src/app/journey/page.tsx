
import ThemedContainer from "@/components/general/themedContainer";
import ThemeProvider from "@/provider/general/themeProvider";

type journeyItemType = {
    date_interval: string,
    title: string,
    description: string,
    link: string
}
const Journey = () => {
    const date  = new Date();
   const journey = [
        {
            date_interval: `September 2023 - ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`,
            title: "Backend Developer, Vaimo",
            description: `Provided technical support for Vaimo's e-commerce platform, leveraging expertise in [Magento, PHP, MySQL, Python, Node, React, Next]. Responsibilities included:
Troubleshooting and resolving complex technical issues related to [platform performance, API integrations, payment gateways].
Utilizing [Jira, K9s, Grafana, OpenLens] to diagnose and resolve client issues.
Collaborating with development teams to address and resolve software bugs, and providing technical guidance and support to clients.`,
            link: "https://www.vaimo.com",
            type: "work"
        },
        {
            date_interval: "October 2022- September 2023",
            title: "Full Stack Engineer, Sci-Bono Discovery Centre",
            description: "Design web and mobile application mockups, create static user interfaces and dynamic user interfaces with Php, MySQL, Laravel, Django, Bootstrap and React.",
            link: "#",
            type: "work"
        },

        {
            date_interval: "May 2022- December 2022",
            title: "Google IT Support [Coursera]",
            description: "IT support program that covers troubleshooting, customer service, networking, operating systems, system administration, security, and includes evaluative hands-on assessments.",
            link: "https://www.coursera.org",
            type: "education"
        },
        {
            date_interval: "December 2022- May 2023",
            title: "Google IT Automation with Python [Coursera]",
            description: "Intensive IT support program that covers troubleshooting, customer service, puppet, networking, operating systems, system administration, cloud automation, security, and includes evaluative hands-on assessments.",
            link: "https://www.coursera.org",
            type: "education"
        },
        {
            date_interval: "May 2023- September 2023",
            title: "Meta Back-End Developer [Coursera]",
            description: "Backend development course with python for the web using Django, and relational and non-relational databases and includes evaluative hands-on assessments.",
            link: "https://www.coursera.org",
            type: "education"
        },
        {
            date_interval: "May 2023- September 2023",
            title: "Mobile Development w/React Native [MTN Business Academy]",
            description: "Full stack NQF level 5 certificate in react and react-native. Firebase as a backend technology, also problem solving, presentation, front-end design and math.",
            link: "#",
            type: "education"
        },
        {
            date_interval: "2017",
            title: "Matric [Millennium Combined School]",
            description: "High School Diploma with math and science",
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
                <a href={journeyItem.link} target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 
                bg-white border border-current rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 
                focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 
                dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more 
                <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg></a>
            </li>
        )
    }
    
  return (
    <ThemeProvider>
        <ThemedContainer className="w-full flex"> <h1 className="text-2xl m-auto font-bold mb-4">My Journey</h1></ThemedContainer>
 <ThemedContainer className="w-full max-w-3xl px-4 py-16 mx-auto">
    <h2 className="text-xl font-bold mb-4">Work Experience</h2>
    <ol className="relative border-s border-gray-200 dark:border-gray-700 mb-8">        
        {
            journey.filter(item => item.type === "work").map((journeyItem: journeyItemType, index: number) =>  
            (  
                journeyListItem(journeyItem, index)
            )
            )
        }
    </ol>

    <h2 className="text-xl font-bold mb-4">Education</h2>
    <ol className="relative border-s border-gray-200 dark:border-gray-700">        
        {
            journey.filter(item => item.type === "education").map((journeyItem: journeyItemType, index: number) =>  
            ( journeyListItem(journeyItem, index))
            )
        }
    </ol>
 


 

</ThemedContainer></ThemeProvider>);

}

export default Journey;