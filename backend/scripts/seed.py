import argparse
import logging
from backend.database import SessionLocal, Base, engine
from backend.models.opportunity import OpportunityModel

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
logger = logging.getLogger("connectsphere.seed")

DEMO_OPPORTUNITIES = [
    {
        "id": "cs-001",
        "title": "Junior Full-Stack Engineer (Next.js & Node.js)",
        "organization": "Bengal Softworks Ltd.",
        "organization_type": "Software & IT Services",
        "location": "Dhaka, Bangladesh (Gulshan-2)",
        "city": "Dhaka",
        "type": "full-time",
        "arrangement": "hybrid",
        "experience_level": "Entry-Level (0-2 yrs)",
        "compensation": "৳ 45,000 - ৳ 65,000 / month",
        "skills": ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
        "short_description": "Join an energetic product engineering team building high-throughput SaaS web applications for Southeast Asian enterprise clients.",
        "description": "Bengal Softworks is looking for an enthusiastic Junior Full-Stack Engineer to collaborate on modern web platforms. You will work alongside senior software architects, converting design systems into responsive Next.js frontends and integrating robust Node.js microservices.",
        "responsibilities": [
            "Develop responsive and accessible web interfaces using Next.js and TypeScript.",
            "Collaborate with backend engineers to integrate RESTful and GraphQL APIs.",
            "Participate in daily standups, code reviews, and architectural discussions.",
            "Write unit tests and perform browser compatibility testing.",
            "Identify bottlenecks and optimize client-side rendering performance.",
        ],
        "requirements": [
            "Demonstrated experience with React, Next.js, and TypeScript through coursework, internships, or personal projects.",
            "Familiarity with server-side logic in Node.js or Express.",
            "Comfort with relational databases (PostgreSQL or MySQL) and basic schema design.",
            "Understanding of Git workflow and collaborative version control.",
            "Bachelor's degree in Computer Science, Software Engineering, or equivalent practical portfolio.",
        ],
        "benefits": [
            "Hybrid work model (3 days office, 2 days remote).",
            "Bi-annual salary reviews and performance bonuses.",
            "Provident fund and comprehensive medical insurance.",
            "Annual training and certification budget.",
            "Catered lunch and snacks in office.",
        ],
        "deadline": "2026-11-25",
        "posted_date": "2026-10-20",
        "is_featured": True,
        "target_audience": "Fresh graduates and entry-level developers",
        "application_url": None,
        "is_sample_data": True,
        "verification_status": "demo_verified",
    },
    {
        "id": "cs-002",
        "title": "Frontend Engineering Intern (React & Tailwind)",
        "organization": "PathShala EdTech Solutions",
        "organization_type": "Education Technology",
        "location": "Dhaka, Bangladesh (Banani)",
        "city": "Dhaka",
        "type": "internship",
        "arrangement": "on-site",
        "experience_level": "Student / Fresh Graduate",
        "compensation": "৳ 18,000 - ৳ 22,000 / month (Stipend)",
        "skills": ["React", "JavaScript", "Tailwind CSS", "HTML5/CSS3", "Figma"],
        "short_description": "A structured 6-month mentorship internship for motivated computer science students interested in modern interactive learning interfaces.",
        "description": "PathShala EdTech provides digital learning solutions to thousands of secondary school students across Bangladesh. We are offering an immersive 6-month paid internship where you will be paired with a senior mentor, develop UI components, and gain firsthand production experience.",
        "responsibilities": [
            "Translate Figma UI mockups into clean, semantic React components.",
            "Assist in maintaining and expanding our Tailwind-based design library.",
            "Debug cross-browser UI inconsistencies on mobile and desktop.",
            "Contribute to internal documentation and component test suites.",
            "Engage in weekly sprint planning and feedback retrospectives.",
        ],
        "requirements": [
            "Current final-year undergraduate student or recent graduate in CSE/EEE/IT.",
            "Solid understanding of HTML, CSS, JavaScript (ES6+), and modern CSS frameworks.",
            "Basic hands-on experience with React and state management hooks.",
            "Keen eye for visual detail, spacing, and responsive design principles.",
            "Self-driven attitude with eagerness to learn production software practices.",
        ],
        "benefits": [
            "Opportunity for permanent Junior Engineer offer upon successful completion.",
            "1-on-1 mentorship from seasoned industry tech leads.",
            "Flexible schedule during university exam weeks.",
            "Certificate of Internship and industry recommendation letter.",
            "Free daily lunch and transportation allowance.",
        ],
        "deadline": "2026-11-15",
        "posted_date": "2026-10-22",
        "is_featured": True,
        "target_audience": "Undergraduate university students and recent graduates",
        "application_url": None,
        "is_sample_data": True,
        "verification_status": "demo_verified",
    },
    {
        "id": "cs-003",
        "title": "UI/UX Product Designer",
        "organization": "PortCity Digital Innovations",
        "organization_type": "Product Studio",
        "location": "Chattogram, Bangladesh",
        "city": "Chattogram",
        "type": "full-time",
        "arrangement": "remote",
        "experience_level": "Mid-Level (2-4 yrs)",
        "compensation": "৳ 55,000 - ৳ 75,000 / month",
        "skills": ["Figma", "UI/UX Design", "Wireframing", "User Research", "Design Systems"],
        "short_description": "Craft human-centric digital experiences for supply chain, logistics, and maritime enterprise software systems.",
        "description": "PortCity Digital is expanding our distributed product design team based in Chattogram. We build SaaS solutions for cargo management, port analytics, and logistics operators. We need a creative, user-focused UI/UX Designer who excels at turning complex operational flows into intuitive visual workflows.",
        "responsibilities": [
            "Conduct user interviews and analyze operational workflows with logistics coordinators.",
            "Create high-fidelity wireframes, interactive prototypes, and user journey maps in Figma.",
            "Maintain, evolve, and document the multi-brand design system.",
            "Collaborate closely with frontend engineers during sprint implementations.",
            "Lead usability tests and synthesize feedback into rapid design iterations.",
        ],
        "requirements": [
            "2+ years of professional digital product design experience (web and mobile).",
            "Demonstrated portfolio showcasing end-to-end UX research and polished UI design.",
            "Expert knowledge of Figma, component libraries, auto-layout, and prototyping tokens.",
            "Familiarity with web accessibility guidelines (WCAG 2.1 AA).",
            "Strong communication skills in Bengali and English.",
        ],
        "benefits": [
            "Fully remote work flexibility with home office setup stipend.",
            "Festival bonuses (2 times per year).",
            "Paid annual leave and health coverage.",
            "Subsidized hardware upgrades after 12 months.",
            "Collaborative and transparent engineering culture.",
        ],
        "deadline": "2026-12-01",
        "posted_date": "2026-10-18",
        "is_featured": True,
        "target_audience": "Mid-level UI/UX designers across Bangladesh",
        "application_url": None,
        "is_sample_data": True,
        "verification_status": "demo_verified",
    },
    {
        "id": "cs-004",
        "title": "Freelance Mobile App Developer (Flutter)",
        "organization": "Agrani Fintech Solutions",
        "organization_type": "Financial Services Startup",
        "location": "Dhaka, Bangladesh",
        "city": "Dhaka",
        "type": "freelance",
        "arrangement": "remote",
        "experience_level": "Mid-Level (2-4 yrs)",
        "compensation": "৳ 45,000 - ৳ 60,000 (Per Milestone Project)",
        "skills": ["Flutter", "Dart", "Firebase", "REST APIs", "State Management (Bloc)"],
        "short_description": "Deliver a modular cross-platform mobile wallet prototype for micro-merchants in peri-urban areas of Bangladesh.",
        "description": "Agrani Fintech is prototyping a lightweight, low-bandwidth financial ledger app designed for rural and peri-urban shop owners. We are seeking an independent freelance Flutter engineer to implement key mobile modules over a 10-week contract.",
        "responsibilities": [
            "Develop cross-platform iOS and Android mobile interfaces using Flutter & Dart.",
            "Integrate local offline SQLite caching for low-connectivity environments.",
            "Connect authentication, transactions, and notification endpoints via REST APIs.",
            "Deliver clean, well-commented code adhering to Bloc architecture conventions.",
            "Participate in weekly milestone review sessions.",
        ],
        "requirements": [
            "Proven track record of publishing or completing Flutter applications.",
            "Deep understanding of state management (Bloc, Provider, or Riverpod).",
            "Experience optimizing mobile app asset payloads and offline data sync.",
            "Ability to commit 15-20 hours weekly over the 10-week contract duration.",
            "Available for weekly virtual syncs during Bangladesh Standard Time business hours.",
        ],
        "benefits": [
            "Clear milestone-based payout schedule upon deliverable approval.",
            "Potential for recurring freelance projects or long-term retainer.",
            "Flexible working hours and 100% remote collaboration.",
            "Direct technical liaison with the founding engineering team.",
        ],
        "deadline": "2026-11-20",
        "posted_date": "2026-10-24",
        "is_featured": True,
        "target_audience": "Independent mobile developers and freelancers",
        "application_url": None,
        "is_sample_data": True,
        "verification_status": "demo_verified",
    },
    {
        "id": "cs-005",
        "title": "Student Campus Ambassador & Technical Lead",
        "organization": "ConnectSphere University Network",
        "organization_type": "Community & Education Initiative",
        "location": "Sylhet, Bangladesh (SUST & Regional Universities)",
        "city": "Sylhet",
        "type": "student",
        "arrangement": "hybrid",
        "experience_level": "Student / Fresh Graduate",
        "compensation": "৳ 8,000 / month + Certification & Travel Stipend",
        "skills": ["Public Speaking", "Community Leadership", "Event Organizing", "Git", "Peer Mentoring"],
        "short_description": "Represent ConnectSphere at your university campus, organize skill-building workshops, and mentor peer job-seekers.",
        "description": "The ConnectSphere University Network is empowering university campuses across Bangladesh with career readiness programs. We are recruiting student leaders in Sylhet, Chittagong, Rajshahi, and Dhaka to spearhead local student tech circles, organize hackathons, and help peers discover verified career opportunities.",
        "responsibilities": [
            "Act as the primary campus point of contact for ConnectSphere career programs.",
            "Organize monthly on-campus or virtual workshops on resume building and GitHub portfolios.",
            "Collect feedback from university students regarding career challenges in Bangladesh.",
            "Collaborate with regional tech student clubs and department societies.",
            "Write brief monthly activity reports.",
        ],
        "requirements": [
            "Enrolled undergraduate student at an accredited university in Bangladesh.",
            "Active participant in tech, entrepreneurship, or student welfare clubs.",
            "Strong verbal and written communication skills.",
            "Passionate about youth employment and tech education access.",
            "Reliable and organized self-starter.",
        ],
        "benefits": [
            "Monthly activity stipend and workshop sponsorship budget.",
            "Direct exposure to partner employers and industry keynote speakers.",
            "Exclusive access to advance Career Navigator feature previews.",
            "Official certificate of campus leadership upon program graduation.",
        ],
        "deadline": "2026-12-10",
        "posted_date": "2026-10-15",
        "is_featured": True,
        "target_audience": "University undergraduates seeking leadership credentials",
        "application_url": None,
        "is_sample_data": True,
        "verification_status": "demo_verified",
    },
    {
        "id": "cs-006",
        "title": "National Young AI & Data Science Fellowship 2026",
        "organization": "Bangladesh Center for Advanced Computing",
        "organization_type": "Research Institution",
        "location": "Dhaka, Bangladesh (Agargaon ICT Division)",
        "city": "Dhaka",
        "type": "scholarship",
        "arrangement": "hybrid",
        "experience_level": "Open to All",
        "compensation": "৳ 120,000 Research Grant + Lab Access",
        "skills": ["Python", "Machine Learning", "PyTorch", "Data Science", "Research Writing"],
        "short_description": "Prestigious 1-year research grant and compute lab access for young researchers addressing local language processing and climate tech.",
        "description": "The Bangladesh Center for Advanced Computing is funding 10 research fellows working on high-impact AI challenges in Bangladesh. Priority research domains include Bangla Natural Language Processing (LLMs, speech recognition), climate resilience modeling in coastal deltas, and automated crop disease detection.",
        "responsibilities": [
            "Formulate a clear 12-month research methodology with measurable milestones.",
            "Utilize high-performance GPU compute clusters to train and benchmark models.",
            "Publish open-source datasets or models adhering to reproducible science standards.",
            "Present interim progress at the bi-annual National ICT Symposium.",
            "Submit a final research paper suitable for peer-reviewed workshop publication.",
        ],
        "requirements": [
            "Undergraduate or graduate students, or early-career researchers residing in Bangladesh.",
            "Demonstrated programming capability in Python, NumPy, Pandas, and PyTorch or TensorFlow.",
            "A 2-page project proposal highlighting target problem, dataset plan, and societal relevance.",
            "Letter of academic recommendation or GitHub research code samples.",
        ],
        "benefits": [
            "BDT 120,000 non-dilutive research stipend disbursed across milestones.",
            "Dedicated access to national GPU compute clusters (NVIDIA A100 equivalents).",
            "Mentorship from leading Bangladeshi machine learning researchers globally.",
            "Travel grant to present accepted papers at accredited conferences.",
        ],
        "deadline": "2026-12-31",
        "posted_date": "2026-10-05",
        "is_featured": True,
        "target_audience": "AI researchers, graduate students, and data scientists",
        "application_url": None,
        "is_sample_data": True,
        "verification_status": "demo_verified",
    },
    {
        "id": "cs-007",
        "title": "Associate Data Analyst (Business Intelligence)",
        "organization": "Meghna Supply Chain Analytics",
        "organization_type": "Logistics & Manufacturing",
        "location": "Chattogram, Bangladesh (Agrabad C/A)",
        "city": "Chattogram",
        "type": "full-time",
        "arrangement": "on-site",
        "experience_level": "Entry-Level (0-2 yrs)",
        "compensation": "৳ 40,000 - ৳ 55,000 / month",
        "skills": ["SQL", "Power BI", "Excel", "Python", "Data Visualization"],
        "short_description": "Analyze export-import inventory throughput and generate automated executive KPI dashboards for maritime freight forwarding operations.",
        "description": "Meghna Supply Chain Analytics is a premier operations intelligence unit in Chattogram. We are seeking an analytical Associate Data Analyst to transform raw transactional data into actionable operational insights for port and warehouse management.",
        "responsibilities": [
            "Write complex SQL queries to extract and transform relational database records.",
            "Build and maintain interactive Power BI dashboards for branch managers.",
            "Perform exploratory data analysis on shipment delivery turnarounds.",
            "Audit raw warehouse data to identify discrepancies and anomalies.",
            "Present quarterly performance trends to cross-functional teams.",
        ],
        "requirements": [
            "Bachelor's degree in Statistics, Economics, Computer Science, or Business Analytics.",
            "Strong hands-on command of SQL (joins, subqueries, window functions).",
            "Proficiency with Power BI, Tableau, or similar business intelligence tools.",
            "Advanced Microsoft Excel skills (Pivot Tables, Power Query, statistical formulas).",
            "Curious problem solver with attention to numerical precision.",
        ],
        "benefits": [
            "Full-time permanent position with clear senior analyst promotion track.",
            "Contributory provident fund and gratuity.",
            "Annual health checkups and group life insurance.",
            "Two festival bonuses and transport allowance.",
        ],
        "deadline": "2026-11-28",
        "posted_date": "2026-10-21",
        "is_featured": False,
        "target_audience": "Fresh graduates in STEM, Statistics, and Business Analytics",
        "application_url": None,
        "is_sample_data": True,
        "verification_status": "demo_verified",
    },
    {
        "id": "cs-008",
        "title": "Backend Engineering Intern (Python / FastAPI)",
        "organization": "Shurjo Cloud Labs",
        "organization_type": "Cloud & Infrastructure Solutions",
        "location": "Dhaka, Bangladesh (Mohakhali DOHS)",
        "city": "Dhaka",
        "type": "internship",
        "arrangement": "hybrid",
        "experience_level": "Student / Fresh Graduate",
        "compensation": "৳ 20,000 - ৳ 24,000 / month (Stipend)",
        "skills": ["Python", "FastAPI", "Docker", "PostgreSQL", "Redis"],
        "short_description": "Gain hands-on microservices development experience building asynchronous APIs, caching layers, and containerized cloud services.",
        "description": "Shurjo Cloud Labs develops scalable backend engines for telecommunications and eCommerce clients. Our 4-month backend internship gives computer science students practical exposure to modern distributed architecture, asynchronous Python programming, and automated CI/CD pipelines.",
        "responsibilities": [
            "Assist in writing modular REST endpoints using Python 3 and FastAPI.",
            "Configure Docker containers for local development and integration tests.",
            "Implement Redis caching routines for frequently requested database queries.",
            "Write comprehensive test cases using Pytest.",
            "Document API schemas using OpenAPI and Swagger standards.",
        ],
        "requirements": [
            "Completed or pursuing a Bachelor's degree in Computer Science or related field.",
            "Solid knowledge of Python programming fundamentals and object-oriented design.",
            "Basic understanding of HTTP protocols, REST architectural principles, and SQL.",
            "Eagerness to learn Docker, Linux CLI, and cloud environments.",
            "Strong analytical mindset and collaborative team spirit.",
        ],
        "benefits": [
            "High probability of conversion to permanent Junior Backend Engineer.",
            "Direct technical mentorship from principal systems architects.",
            "Hybrid flexibility (2 days remote per week).",
            "Free snacks, beverages, and recreational games room in office.",
        ],
        "deadline": "2026-11-18",
        "posted_date": "2026-10-23",
        "is_featured": False,
        "target_audience": "Students with strong backend engineering interest",
        "application_url": None,
        "is_sample_data": True,
        "verification_status": "demo_verified",
    },
    {
        "id": "cs-009",
        "title": "Freelance Technical & Career Content Writer",
        "organization": "DevSphere Media Group",
        "organization_type": "Digital Publishing & Tech Media",
        "location": "Remote - Bangladesh",
        "city": "Remote",
        "type": "freelance",
        "arrangement": "remote",
        "experience_level": "Entry-Level (0-2 yrs)",
        "compensation": "৳ 25,000 - ৳ 35,000 / month (Retainer)",
        "skills": ["Technical Writing", "SEO", "Copywriting", "Research", "Markdown"],
        "short_description": "Produce engaging, well-researched technical guides, career readiness tutorials, and developer interviews for Bangladeshi youth.",
        "description": "DevSphere Media publishes career guides and developer resources for rising tech professionals in South Asia. We are seeking a skilled bilingual content writer to write 4-6 insightful articles per month covering software career tracks, skill roadmaps, and tech interview preparation.",
        "responsibilities": [
            "Research and author in-depth educational articles on software career paths in Bangladesh.",
            "Interview senior developers and university career counselors to gather practical advice.",
            "Optimize articles for search visibility using ethical SEO best practices.",
            "Format articles cleanly in Markdown with code snippets and diagrams.",
            "Deliver drafts punctually according to our bi-weekly editorial calendar.",
        ],
        "requirements": [
            "Excellent written communication skills in both English and Bengali.",
            "Demonstrated ability to explain complex technical concepts in plain language.",
            "Portfolio of published blog posts, documentation, or tech articles.",
            "Familiarity with modern software development terms (cloud, frontend, full-stack, DevOps).",
            "Reliability, deadline discipline, and responsiveness over email/Slack.",
        ],
        "benefits": [
            "Fixed monthly retainer with timely electronic bank transfers.",
            "100% remote asynchronous work schedule.",
            "Author byline and professional visibility across thousands of readers.",
            "Editorial mentorship and style-guide coaching.",
        ],
        "deadline": "2026-12-05",
        "posted_date": "2026-10-17",
        "is_featured": False,
        "target_audience": "Freelance writers and developers with strong writing aptitude",
        "application_url": None,
        "is_sample_data": True,
        "verification_status": "demo_verified",
    },
    {
        "id": "cs-010",
        "title": "Student Innovation Incubator: IoT & AgriTech Solutions",
        "organization": "Sylhet Green Tech Alliance",
        "organization_type": "Social Enterprise & Incubator",
        "location": "Sylhet, Bangladesh (Osmani Nagar)",
        "city": "Sylhet",
        "type": "student",
        "arrangement": "on-site",
        "experience_level": "Student / Fresh Graduate",
        "compensation": "৳ 60,000 Prototype Seed Fund + Maker Space",
        "skills": ["Arduino / ESP32", "IoT", "Sensors", "Python", "Rapid Prototyping"],
        "short_description": "An incubator grant for university student teams prototyping smart climate-adaptive tea garden sensors and flood warning devices.",
        "description": "The Sylhet Green Tech Alliance supports student hardware innovators tackling ecological challenges in the Surma-Kushiyara basin. Selected student teams will receive dedicated maker space access, hardware sensor kits, and seed funding to construct functional IoT telemetry prototypes.",
        "responsibilities": [
            "Design and test sensor circuit boards for environmental data logging.",
            "Deploy field sensor nodes in simulated tea garden or flood monitoring testbeds.",
            "Interface microcontrollers with cellular or LoRa telemetry modules.",
            "Document hardware schematics, firmware code, and test measurements.",
            "Present live hardware demonstration at the regional Innovation Expo.",
        ],
        "requirements": [
            "Team of 2-4 undergraduate students currently enrolled at a Bangladeshi college or university.",
            "Basic background in microcontrollers, embedded C/C++, or Python.",
            "Passion for practical environmental and agricultural engineering.",
            "Willingness to spend 6-8 hours weekly at the maker workshop in Sylhet.",
        ],
        "benefits": [
            "BDT 60,000 non-repayable seed fund for components and fabrication.",
            "Free access to 3D printers, laser cutters, oscilloscopes, and testing benches.",
            "Direct technical coaching from seasoned hardware engineers.",
            "Showcase opportunity to regional green investment venture funds.",
        ],
        "deadline": "2026-12-15",
        "posted_date": "2026-10-12",
        "is_featured": False,
        "target_audience": "Undergraduate engineering students building hardware projects",
        "application_url": None,
        "is_sample_data": True,
        "verification_status": "demo_verified",
    },
]


def seed_database(clear_existing: bool = False):
    """Seed demonstration opportunities into the database."""
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()

    try:
        if clear_existing:
            deleted_count = db.query(OpportunityModel).delete()
            db.commit()
            logger.info(f"Cleared {deleted_count} existing records.")

        seeded_count = 0
        for item in DEMO_OPPORTUNITIES:
            existing = (
                db.query(OpportunityModel)
                .filter(OpportunityModel.id == item["id"])
                .first()
            )
            if not existing:
                opp = OpportunityModel(**item)
                db.add(opp)
                seeded_count += 1

        db.commit()
        logger.info(
            f"Successfully seeded {seeded_count} demonstration opportunities into database. "
            f"(Total records: {db.query(OpportunityModel).count()})"
        )
    except Exception as exc:
        db.rollback()
        logger.error(f"Failed to seed database: {exc}")
        raise
    finally:
        db.close()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Seed ConnectSphere demonstration opportunities into database."
    )
    parser.add_argument(
        "--clear",
        action="store_true",
        help="Clear existing opportunity records before seeding.",
    )
    args = parser.parse_args()

    logger.info("Executing development seed script...")
    seed_database(clear_existing=args.clear)

