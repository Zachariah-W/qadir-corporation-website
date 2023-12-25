let isYuchinInfoAdded = false;
let isCollunInfoAdded = false;
let isHoffmannInfoAdded = false;
let isRubyInfoAdded = false;
let isMiffyInfoAdded = false;
let isAlexInfoAdded = false;
let isNickInfoAdded = false;
let isZhangInfoAdded = false;
let isLiviaInfoAdded = false;
let yuchinOGContent = '';
let collunOGContent = '';
let hoffmannOGContent = '';
let rubyOGContent = '';
let MiffyOGContent = '';
let alexOGContent = '';
let nickOGContent = '';
let zhangOGContent = '';
let liviaOGContent = '';

function yuchinInfo() {
    if (!isYuchinInfoAdded) {
        let yuchinDiv = document.getElementById('yuchin-info');
        let yuchinRole = document.createElement('p');
        let yuchinBG = document.createElement('p');
        let yuchinFL = document.createElement('p');
        let yuchinMIS = document.createElement('p');
        let yuchinIE = document.createElement('p');
        let yuchinSP = document.createElement('p');
        let yuchinVG = document.createElement('p');
        let yuchinFC = document.createElement('p');
        yuchinRole.innerHTML = "<strong>Role:</strong> Co-founder and Chief Financial Officer (CFO), Qadir Corporation";
        yuchinBG.innerHTML = "<strong>Background:</strong> Yuchin Lin, leveraging her extensive financial experience, holds the position of Co-founder and Chief Financial Officer at Qadir Corporation. Her strategic financial acumen plays a pivotal role in shaping the company's overall strategy.";
        yuchinFL.innerHTML = "<strong>Financial Leadership:</strong> As CFO, Ms. Lin spearheads corporate finance initiatives, ensuring sound financial health for Qadir Corporation. Her wealth of financial knowledge is a driving force behind the company's fiscal decision-making and long-term financial planning."
        yuchinMIS.innerHTML = "<strong>Market Insight and Strategy:</strong> Yuchin Lin actively engages in market and industry research, particularly in automation. Her insights contribute significantly to the company's strategy formulation, ensuring that Qadir remains at the forefront of advancements in the rapidly evolving field of automation."
        yuchinIE.innerHTML = "<strong>Industry Engagement:</strong> Beyond Qadir Corporation, Ms. Lin holds key positions as a Non-Independent Vice Chairman of A East-West Express private investment company and a Council Member of the Folks Enterprise Group’s Advisory Board. Her engagement in these roles reflects her influence and leadership in broader financial and enterprise circles."
        yuchinSP.innerHTML = "<strong>Strategic Partnerships:</strong> Yuchin Lin's involvement in various advisory roles demonstrates her commitment to fostering strategic partnerships and collaborations. These connections are instrumental in positioning Qadir Corporation in alignment with industry trends and opportunities."
        yuchinVG.innerHTML = "<strong>Vision for Growth:</strong> As a co-founder, Yuchin Lin is instrumental in driving Qadir Corporation's vision for growth and sustainability. Her financial stewardship and industry insights contribute to the company's ability to navigate challenges and seize emerging opportunities."
        yuchinFC.innerHTML = "<strong>Future Contributions:</strong> Yuchin Lin's multifaceted roles in Qadir Corporation and various advisory positions underscore her commitment to driving not only the company's success but also contributing to the broader financial and enterprise landscape. Her strategic approach and financial leadership position her as a key architect of Qadir Corporation's continued growth and innovation.";
        yuchinOGContent = yuchinDiv.innerHTML;
        yuchinDiv.appendChild(yuchinRole);
        yuchinDiv.appendChild(yuchinBG);
        yuchinDiv.appendChild(yuchinFL);
        yuchinDiv.appendChild(yuchinMIS);
        yuchinDiv.appendChild(yuchinIE);
        yuchinDiv.appendChild(yuchinSP);
        yuchinDiv.appendChild(yuchinVG);
        yuchinDiv.appendChild(yuchinFC);
        isYuchinInfoAdded = true;
    }
}

function yuchinOgInfo() {
    let yuchinDiv = document.getElementById('yuchin-info');
    yuchinDiv.innerHTML = yuchinOGContent;
    isYuchinInfoAdded = false;
}

function collunInfo() {
    if (!isCollunInfoAdded) {
        let collunDiv = document.getElementById('collun-info');
        let collunRole = document.createElement('p');
        let collunBG = document.createElement('p');
        let collunExpertise = document.createElement('p');
        let collunLJ = document.createElement('p');
        let collunII = document.createElement('p');
        let collunVA = document.createElement('p');
        let collunFC = document.createElement('p'); 
        collunRole.innerHTML = "<strong>Role:</strong> Chief Executive Officer (CEO)";
        collunBG.innerHTML = "<strong>Background:</strong> Collun Wang, the esteemed CEO of Qadir Corporation, has been a stalwart member of the board since 2008. Prior to assuming his current position, he served as the North-Asia Region General Manager of A-Rank Berhad.";
        collunExpertise.innerHTML = "<strong>Expertise:</strong> Mr. Wang has accumulated profound expertise in the industrial and mechanical sectors. His extensive knowledge is marked by the ownership of multiple patented technologies. With comprehensive cross-industry insights, he consistently engineers solutions for intricate challenges, setting benchmarks in the process."
        collunLJ.innerHTML = "<strong>Leadership Journey:</strong> As CEO, Collun Wang guides Qadir Corporation with a strategic vision, leveraging his experience in both executive leadership and a deep understanding of industrial intricacies. His journey from a regional GM to the helm of Qadir Corporation signifies a trajectory of leadership excellence."
        collunII.innerHTML = "<strong>Industry Impact:</strong> Collun Wang's influence extends beyond Qadir Corporation to shape industries such as food, automotive components, chemicals, medical, and traditional sectors. His patented technologies and innovative solutions have not only driven the company's success but have set industry standards across diverse sectors."
        collunVA.innerHTML = "<strong>Visionary Approach:</strong> Known for his visionary approach, Mr. Wang leads Qadir Corporation with a commitment to innovation and excellence. His ability to navigate complex challenges and set benchmarks has positioned the company as a leader in multiple industries."
        collunFC.innerHTML = "<strong>Future Trajectory:</strong> Under Collun Wang's leadership, Qadir Corporation is poised for continued growth and innovation. His forward-thinking approach, coupled with a rich background in industrial and mechanical expertise, sets the trajectory for the company's success in an ever-evolving business landscape.";
        collunOGContent = collunDiv.innerHTML;
        collunDiv.appendChild(collunRole);
        collunDiv.appendChild(collunBG);
        collunDiv.appendChild(collunExpertise);
        collunDiv.appendChild(collunLJ);
        collunDiv.appendChild(collunII);
        collunDiv.appendChild(collunVA);
        collunDiv.appendChild(collunFC);
        isCollunInfoAdded = true;
    }
}

function collunOgInfo() {
    let collunDiv = document.getElementById('collun-info');
    collunDiv.innerHTML = collunOGContent;
    isCollunInfoAdded = false;
}

function hoffmannInfo(){
    if(!isHoffmannInfoAdded){
        let hoffmannDiv = document.getElementById('hoffmann-info');
        let hoffmannRole = document.createElement('p');
        let hoffmannBG = document.createElement('p');
        let hoffmannExpertise = document.createElement('p');
        let hoffmannIT = document.createElement('p');
        let hoffmannVF = document.createElement('p');
        let hoffmannCI = document.createElement('p');
        let hoffmannFTL = document.createElement('p'); 
        hoffmannRole.innerHTML = "<strong>Role:</strong> Chief Technology Officer (CTO)";
        hoffmannBG.innerHTML = "<strong>Background:</strong> With over two decades of experience as a seasoned IT professional, Hoffmann Liu assumes the critical role of Chief Technology Officer at a leading IT industrial firm. His tenure is marked by a relentless commitment to spearheading technological advancements that redefine industry standards.";
        hoffmannExpertise.innerHTML = "<strong>Expertise:</strong> Mr. Liu excels in the dynamic realm of IT, showcasing a mastery of cutting-edge technologies. His strategic approach focuses on leveraging these technologies to enhance industrial processes, driving digital transformation with precision, efficiency, and a strategic emphasis on cost reduction. His extensive background includes successful implementation of IT solutions in diverse industries, further enriching his strategic capabilities."
        hoffmannIT.innerHTML = "<strong>Integration of IT into Robotic Automation:</strong> One of Hoffmann Liu's key initiatives has been the seamless integration of IT into robotic automation. Recognizing the transformative potential of this synergy, he has championed the development and implementation of IT-driven solutions to optimize robotic automation processes. His visionary leadership has led to the creation of robotic systems that are not only intelligent and versatile but also interconnected, contributing to a more efficient and interconnected industrial landscape."
        hoffmannVF.innerHTML = "<strong>Vision for the Future:</strong> Hoffmann Liu is not merely a technologist; he is a visionary who envisions a connected and efficient future. His strategic roadmap involves seamless IT integration, guiding the company toward Industry 4.0 standards. Through his initiatives, he elevates technological capabilities, providing the organization with a distinct competitive edge in the ever-evolving industrial landscape."
        hoffmannCI.innerHTML = "<strong>Commitment to Innovation:</strong> What sets Mr. Liu apart is not just his technological prowess but his unwavering commitment. His initiatives go beyond conventional approaches, positioning him as a key driver shaping the future of IT in the sector. His commitment to innovation is a driving force that propels the company into new frontiers of technological excellence."
        hoffmannFTL.innerHTML = "<strong>Future Technological Landscape:</strong> Hoffmann Liu's strategic direction and commitment to excellence position the company at the forefront of the future technological landscape. His endeavors ensure that the IT industrial firm remains not only adaptive to change but a trailblazer in setting the standards for technological evolution. Under his leadership, the company has witnessed significant growth, expanding its influence in both national and international markets.";
        hoffmannOGContent = hoffmannDiv.innerHTML;
        hoffmannDiv.appendChild(hoffmannRole);
        hoffmannDiv.appendChild(hoffmannBG);
        hoffmannDiv.appendChild(hoffmannExpertise);
        hoffmannDiv.appendChild(hoffmannIT);
        hoffmannDiv.appendChild(hoffmannVF);
        hoffmannDiv.appendChild(hoffmannCI);
        hoffmannDiv.appendChild(hoffmannFTL);
        isHoffmannInfoAdded = true;
    }
}

function hoffmannOgInfo(){
    let hoffmannDiv = document.getElementById('hoffmann-info');
    hoffmannDiv.innerHTML = hoffmannOGContent;
    isHoffmannInfoAdded = false;
}

function rubyInfo(){
    if(!isRubyInfoAdded){
        let rubyDiv = document.getElementById('ruby-info');
        let rubyRole = document.createElement('p');
        let rubyBG = document.createElement('p');
        let rubyLPM = document.createElement('p');
        let rubyMFR = document.createElement('p');
        let rubyAD = document.createElement('p');
        let rubyCSP = document.createElement('p');
        let rubyFPM = document.createElement('p'); 
        rubyRole.innerHTML = "<strong>Role:</strong> Project Manager";
        rubyBG.innerHTML = "<strong>Background:</strong> Ruby Wang, a dedicated professional, became an integral part of Qadir Corp in 2014 and has since served with distinction in the role of Project Manager. Her journey reflects a commitment to excellence and a proven track record in project management.";
        rubyLPM.innerHTML = "<strong>Leadership in Project Management:</strong> In her current role, Ms. Wang leads a dynamic team, overseeing the alignment of designs with customer requirements. She plays a crucial role in the entire project lifecycle, from conception to delivery, ensuring that each project meets the highest standards of quality and efficiency."
        rubyMFR.innerHTML = "<strong>Multi-Faceted Responsibilities:</strong> As Project Manager, Ruby Wang is not only entrusted with the design aspect but also holds pivotal responsibilities in procurement, sourcing, logistics, and managing inbound orders. Her ability to seamlessly integrate various facets of project management showcases her versatility and comprehensive understanding of the project's intricacies."
        rubyAD.innerHTML = "<strong>Attention to Detail:</strong> One of Ruby Wang's defining attributes is her unwavering attention to detail. This quality is instrumental in maintaining a streamlined process throughout the project lifecycle, guaranteeing on-time product delivery and exceeding customer expectations."
        rubyCSP.innerHTML = "<strong>Contributions to Streamlined Processes:</strong> Ruby Wang's contributions go beyond conventional project management. Her strategic oversight ensures that not only are designs aligned with customer requirements, but the entire project execution is a well-orchestrated process that reflects Qadir Corp's commitment to excellence."
        rubyFPM.innerHTML = "<strong>Future in Project Management:</strong> As Qadir Corp continues to grow and innovate, Ruby Wang's leadership in project management remains pivotal. Her dedication to maintaining high standards of quality and efficiency positions her as a key figure in shaping the future success of projects undertaken by Qadir Corp.";
        rubyOGContent = rubyDiv.innerHTML;
        rubyDiv.appendChild(rubyRole);
        rubyDiv.appendChild(rubyBG);
        rubyDiv.appendChild(rubyLPM);
        rubyDiv.appendChild(rubyMFR);
        rubyDiv.appendChild(rubyAD);
        rubyDiv.appendChild(rubyCSP);
        rubyDiv.appendChild(rubyFPM);
        isRubyInfoAdded = true;
    }
}

function rubyOgInfo(){
    let rubyDiv = document.getElementById('ruby-info');
    rubyDiv.innerHTML = rubyOGContent;
    isRubyInfoAdded = false;
}

function miffyInfo(){
    if(!isMiffyInfoAdded){
        let miffyDiv = document.getElementById('miffy-info');
        let miffyRole = document.createElement('p');
        let miffyBG = document.createElement('p');
        let miffyEIP = document.createElement('p');
        let miffyARF = document.createElement('p');
        let miffyLIA = document.createElement('p');
        let miffyFC = document.createElement('p');
        miffyRole.innerHTML = "<strong>Role:</strong> Legal Counsel";
        miffyBG.innerHTML = "<strong>Background:</strong> Miffy Yen, an esteemed legal professional, holds the vital position of Legal Counsel at Qadir Corporation. With over 20 years of experience in the field of Intellectual Property protection, she brings a wealth of expertise in providing strategic protection for companies selling products and services globally.";
        miffyEIP.innerHTML = "<strong>Expertise in Intellectual Property:</strong> Ms. Yen's proficiency lies in crafting robust protection strategies for intellectual property, ensuring that companies navigate the global marketplace with confidence. Her extensive legal knowledge has made her a trusted advisor in safeguarding the interests of businesses, contributing to their long-term success."
        miffyARF.innerHTML = "<strong>Advocacy for Regulatory Framework:</strong> Beyond her role as Legal Counsel, Ms. Yen has initiated a noteworthy effort to lobby for a more comprehensive regulatory framework for the automation industry. Recognizing the importance of aligning regulations with technological advancements, she engages with authorities to shape policies that foster innovation while ensuring ethical and legal standards."
        miffyLIA.innerHTML = "<strong>Lasting Impact and Advocacy:</strong> Miffy Yen's contributions extend beyond safeguarding intellectual property. Her proactive stance in advocating for a regulatory environment that supports responsible and innovative practices in the automation industry showcases a commitment to the broader legal landscape and the ethical advancement of technology."
        miffyFC.innerHTML = "<strong>Future Contributions:</strong> As the Legal Counsel at Qadir Corporation, Ms. Yen's continued efforts are poised to have a lasting impact on both intellectual property protection and the development of ethical and legal standards in the automation industry. Her proactive approach reflects a commitment to shaping a future where technology and legal frameworks coexist harmoniously."
        miffyOGContent = miffyDiv.innerHTML;
        miffyDiv.appendChild(miffyRole);
        miffyDiv.appendChild(miffyBG);
        miffyDiv.appendChild(miffyEIP);
        miffyDiv.appendChild(miffyARF);
        miffyDiv.appendChild(miffyLIA);
        miffyDiv.appendChild(miffyFC);
        isMiffyInfoAdded = true;
    }
}

function miffyOgInfo(){
    let miffyDiv = document.getElementById('miffy-info');
    miffyDiv.innerHTML = miffyOGContent;
    isMiffyInfoAdded = false;
}

function alexInfo(){
    if(!isAlexInfoAdded){
        let alexDiv = document.getElementById('alex-info');
        let alexRole = document.createElement('p');
        let alexBG = document.createElement('p');
        let alexFECS = document.createElement('p');
        let alexPLC = document.createElement('p');
        let alexDFTL = document.createElement('p');
        let alexFC = document.createElement('p');
        alexRole.innerHTML = "<strong>Role:</strong> Electrical Controls Engineer";
        alexBG.innerHTML = "<strong>Background:</strong> Alex Wu, a proficient Electrical Controls Engineer, contributes his expertise to the innovative landscape of Qadir Corporation. His specialization lies in designing diverse electrical control systems within machinery, making him a valuable asset to the company.";
        alexFECS.innerHTML = "<strong></strong> With a keen focus on electrical control systems, Mr. Wu excels in designing intricate solutions using PLC (Programmable Logic Controller) hardware and software as the foundation. His technical proficiency ensures the seamless integration of advanced control mechanisms into machinery, contributing to the efficiency and functionality of Qadir's technological solutions."
        alexPLC.innerHTML = "<strong></strong> Alex Wu's innovative approach is evident in his designs, where he leverages cutting-edge PLC technology to enhance the functionality and efficiency of machinery. His designs not only meet industry standards but often set new benchmarks for performance and reliability."
        alexDFTL.innerHTML = "<strong></strong> With a dedication to excellence in electrical controls engineering, Alex Wu continues to be a driving force in shaping the technological landscape of Qadir Corporation. His commitment to innovation and customer satisfaction positions him as a key contributor to the company's success in the dynamic field of electrical control systems."
        alexFC.innerHTML = "<strong></strong> Alex Wu's forward-thinking approach and technical acumen set the stage for future contributions to Qadir Corporation's advancements. As technology continues to evolve, his role as an Electrical Controls Engineer ensures the company remains at the forefront of innovation and excellence in the field."
        alexOGContent = alexDiv.innerHTML;
        alexDiv.appendChild(alexRole);
        alexDiv.appendChild(alexBG);
        alexDiv.appendChild(alexFECS);
        alexDiv.appendChild(alexPLC);
        alexDiv.appendChild(alexDFTL);
        alexDiv.appendChild(alexFC);
        isAlexInfoAdded = true;
    }
}

function alexOgInfo(){
    let alexDiv = document.getElementById('alex-info');
    alexDiv.innerHTML = alexOGContent;
    isAlexInfoAdded = false;
}

function nickInfo(){
    if(!isNickInfoAdded){
        let nickDiv = document.getElementById('nick-info');
        let nickRole = document.createElement('p');
        let nickBG = document.createElement('p');
        let nickKR = document.createElement('p');
        let nickIE = document.createElement('p');
        let nickESC = document.createElement('p');
        let nickNA = document.createElement('p');
        let nickFC = document.createElement('p'); 
        nickRole.innerHTML = "<strong>Role:</strong> Mechanical Developer";
        nickBG.innerHTML = "<strong>Background:</strong> Nick Chung, an accomplished Mechanical Developer, brings a wealth of expertise to Qadir Corporation. With over 7 years of experience in production line analysis and cost reduction projects, he plays a pivotal role in shaping the physical aspects of Qadir Corporation's projects. His specialization includes mechanical systems, jig design, and factory layout.";
        nickKR.innerHTML = "<strong>Key Responsibilities:</strong> Mr. Chung's proficiency extends to overseeing equipment maintenance, installation, and adjustments, ensuring optimal functionality. His strategic background in optimizing production processes and executing cost reduction projects adds a valuable dimension to his current responsibilities."
        nickIE.innerHTML = "<strong>Innovation and Efficiency:</strong> Nick Chung's approach to mechanical development is characterized by innovation and efficiency. His solutions not only meet technical specifications but also contribute to streamlined production processes, reflecting his commitment to achieving operational excellence."
        nickESC.innerHTML = "<strong>Experience and Strategic Contribution:</strong> With over 7 years of experience in production line analysis, Mr. Chung's background positions him as a strategic contributor to the company's goals of efficiency and innovation. His commitment to excellence and optimization aligns with Qadir Corporation's vision for success in the dynamic field of mechanical development."
        nickNA.innerHTML = "<strong>Notable Achievements:</strong> His notable achievements include involvement in numerous sizable projects locally and abroad, including internationally acclaimed projects such as LIMA Aerospace, DSA Exhibition, and Malaysia's Expo Negaraku 2017 at Dataran Merdeka. Additionally, he played a key role in heading the Dubai World Expo 2020 for various countries' pavilions, showcasing his global impact in the industry."
        nickFC.innerHTML = "<strong>Future Contributions:</strong> With a wealth of experience and a commitment to excellence, Nick Chung continues to be a driving force in shaping the mechanical aspects of Qadir Corporation's projects. His background in production optimization positions him as a strategic contributor to the company's goals of efficiency and innovation in the dynamic field of mechanical development.";
        nickOGContent = nickDiv.innerHTML;
        nickDiv.appendChild(nickRole);
        nickDiv.appendChild(nickBG);
        nickDiv.appendChild(nickKR);
        nickDiv.appendChild(nickIE);
        nickDiv.appendChild(nickESC);
        nickDiv.appendChild(nickNA);
        nickDiv.appendChild(nickFC);
        isNickInfoAdded = true;
    }
}

function nickOgInfo(){
    let nickDiv = document.getElementById('nick-info');
    nickDiv.innerHTML = nickOGContent;
    isNickInfoAdded = false;
}

function zhangInfo(){
    if(!isZhangInfoAdded){
        let zhangDiv = document.getElementById('zhang-info');
        let zhangRole = document.createElement('p');
        let zhangBGE = document.createElement('p');
        let zhangR = document.createElement('p');
        let zhangTP = document.createElement('p');
        let zhangCOP = document.createElement('p');
        let zhangFC = document.createElement('p');
        zhangRole.innerHTML = "<strong>Role:</strong> Robotic Programmer";
        zhangBGE.innerHTML = "<strong>Background and Expertise:</strong> Mr. Lee is a seasoned Robotic Programmer with a specialization in customizing robotic equipment for industrial applications. His role encompasses programming, troubleshooting, and hardware maintenance to ensure optimal performance post-installation on production lines.";
        zhangR.innerHTML = "<strong>Responsibilities:</strong> As a Robotic Programmer, Zhang Lee is responsible for the meticulous customization of robotic equipment to meet the specific needs of industrial applications. His expertise extends to programming intricacies, troubleshooting issues that may arise, and conducting hardware maintenance to guarantee uninterrupted and optimal performance on production lines."
        zhangTP.innerHTML = "<strong>Technical Proficiency:</strong> With a strong technical background, Mr. Lee demonstrates proficiency in understanding the nuances of robotic systems. His skill set enables him to navigate the complexities of programming, troubleshooting, and ensuring the long-term functionality of robotic equipment within industrial settings."
        zhangCOP.innerHTML = "<strong>Commitment to Optimal Performance:</strong> Zhang Lee's commitment to optimal performance is evident in his attention to detail and proactive approach to maintenance. He strives to ensure that the robotic equipment he programs operates seamlessly on production lines, contributing to the overall efficiency and success of industrial processes."
        zhangFC.innerHTML = "<strong>Future Contributions:</strong> With his expertise in Robotic Programming and commitment to excellence, Zhang Lee is poised to make valuable contributions to the integration of robotic solutions in industrial applications. His role as a Robotic Programmer aligns with the cutting-edge advancements that Qadir Corporation seeks to achieve in the field of robotic automation."
        zhangOGContent = zhangDiv.innerHTML;
        zhangDiv.appendChild(zhangRole);
        zhangDiv.appendChild(zhangBGE);
        zhangDiv.appendChild(zhangR);
        zhangDiv.appendChild(zhangTP);
        zhangDiv.appendChild(zhangCOP);
        zhangDiv.appendChild(zhangFC);
        isZhangInfoAdded = true;
    }
}

function zhangOgInfo(){
    let zhangDiv = document.getElementById('zhang-info');
    zhangDiv.innerHTML = zhangOGContent;
    isZhangInfoAdded = false;
}

function liviaInfo(){
    if(!isLiviaInfoAdded){
        let liviaDiv = document.getElementById('livia-info');
        let liviaRole = document.createElement('p');
        let liviaBGE = document.createElement('p');
        let liviaR = document.createElement('p');
        let liviaEOM = document.createElement('p');
        let liviaDOA = document.createElement('p');
        let liviaFC = document.createElement('p');
        liviaRole.innerHTML = "<strong>Role:</strong> Office Assistant Manager";
        liviaBGE.innerHTML = "<strong>Background and Expertise:</strong> Livia Hsu is a skilled Office Assistant Manager at Qadir Corporation. As a female professional, her expertise encompasses efficiently managing and controlling project schedules to ensure timely and successful project delivery.";
        liviaR.innerHTML = "<strong>Responsibilities:</strong> As an Office Assistant Manager, Livia plays a crucial role in overseeing various administrative tasks critical to the daily operations of the office. Additionally, she has a background in efficiently managing and controlling project schedules, contributing to the overall efficiency of project management at Qadir Corporation."
        liviaEOM.innerHTML = "<strong>Efficient Office Management:</strong> Livia's proficiency extends to creating project timelines, identifying critical paths, and implementing strategies to keep projects on schedule. Her strategic planning and monitoring techniques optimize project schedules and contribute to the success of project implementations."
        liviaDOA.innerHTML = "<strong>Detail-Oriented Approach:</strong> With a keen eye for detail, Livia ensures that both office operations and project schedules align with the company's objectives. Her meticulous approach minimizes disruptions and enhances the overall efficiency of Qadir Corporation's operations."
        liviaFC.innerHTML = "<strong>Future Contributions:</strong> Livia Hsu's role as an Office Assistant Manager and her expertise in project schedule control are essential to the successful execution of both administrative tasks and projects at Qadir Corporation. Her dedication positions her as a key contributor to the company's commitment to excellence."
        liviaOGContent = liviaDiv.innerHTML;
        liviaDiv.appendChild(liviaRole);
        liviaDiv.appendChild(liviaBGE);
        liviaDiv.appendChild(liviaR);
        liviaDiv.appendChild(liviaEOM);
        liviaDiv.appendChild(liviaDOA);
        liviaDiv.appendChild(liviaFC);
        isLiviaInfoAdded = true;
    }
}

function liviaOgInfo(){
    let liviaDiv = document.getElementById('livia-info');
    liviaDiv.innerHTML = liviaOGContent;
    isLiviaInfoAdded = false;
}

