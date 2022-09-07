//  icons
 
// companies icons
 
// projects images

import Project1 from '../../assets/metatube.png';
import Project2 from '../../assets/portfolio2.jpg';
import Project3 from '../../assets/portfolio3.jpg';
import Project4 from '../../assets/portfolio4.jpg';
import Project5 from '../../assets/portfolio5.png';
import Project6 from '../../assets/portfolio6.jpg';

// skills images
 
// testimonial images

// navigation
 
// projects

export const projectsData = [
  {
    id: '1',
    image: Project1,
    link:'https://metatube-self.vercel.app/',
    name: 'metverse chat system server less',
    category: 'blockchain',
    explain:'metaverse chat system is a platform that based on blockchain which is very secure and fast  ' ,
  },
  {
    id: '2',
    image: Project2,
    name: 'monitoring with zabbix',
    category: 'zabbix',
    explain: 'Zabbix is an open source monitoring software tool for diverse IT components, including networks, servers, virtual machines (VMs) and cloud services. Zabbix provides monitoring metrics, such as network utilization, CPU load and disk space consumption.'
  },
  {
    id: '3',
    image: Project3,
    name: 'run and configuration web servers ',
    category: 'server',
    explain: 'A server configuration defines a specific database as the repository for its data. To prevent corruption, that database can be associated with only one server configuration. However, that database can be used by other applications.'
  },
  {
    id: '4',
    image: Project4,
    name: 'server security',
    category: 'security',
    explain: 'What is server security? Server security focuses on the protection of data and resources held on the servers. It comprises tools and techniques that help prevent intrusions, hacking and other malicious actions. Server security measures vary and are typically implemented in layers'
  },
  {
    id: '5',
    image: Project5,
    name: 'linux server management',
    category: 'server',
    explain: 'Linux server management is an integration of cybersecurity and business objectives. Linux server management at scale is a vastly different activity from interacting with a terminal on one machine. The best Linux server management tools universally offer a server management GUI within a web browser.'
  },
  {
    id: '6',
    image: Project6,
    name: 'microsoft server management',
    category: 'server',
    explain: 'Microsoft Windows Server Manager is a tool to view and manage server roles and make configuration changes. Server Manager allows administrators to manage local and remote servers without requiring physical access to the servers or enabling Remote Desktop Protocol connections.'
  },
];

// projects

export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'server',
  },
  {
    name: 'security',
  },
  {
    name: 'zabbix',
  }, 

];
