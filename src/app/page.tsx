import Image from 'next/image';
import Carousel from '@/components/Carousel/Carousel';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Carousel />
      
      <div className="container">
        <div className={styles.threeColumns}>
          {/* Column 1: Introduction */}
          <div className={styles.column}>
            <h4 className={styles.sectionTitle}>
              <i className="fas fa-book"></i> Introduction
            </h4>
            <p className={styles.paragraph}>
              Ashokta Punarbashan Sangstha (APOSH) emerged as a Self-Help Group of ex-drug users in Rajshahi in 1999. Since 2000, APOSH has been providing detoxification, treatment, and rehabilitation services, serving approximately 5,250 helpless and needy clients during this period.
            </p>
            <p className={styles.paragraph}>
              In 2003, APOSH began working with CARE Bangladesh under a DFID-funded HIV program. In addition, APOSH has undertaken various philanthropic activities in the local community, particularly raising awareness about preventing drug dependency.
            </p>
            <p className={styles.paragraph}>
              In 2004, APOSH provided detoxification services for drug users under the HAPP Projects. In 2006, CARE Bangladesh extended its partnership with APOSH to implement the UNDOC Project.
            </p>
            
            <div className={styles.imageWrapper}>
              <Image src="/uploads/page_images/image_1.jpg" alt="APOSH Activities" width={400} height={250} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
            </div>
            
            <p className={styles.paragraph}>
              Over the years, APOSH has gained programmatic and institutional experience in HIV prevention. APOSH also became involved in outreach and advocacy as part of an IDU (Injecting Drug Users) program in the north-western region of Bangladesh.
            </p>
            <p className={styles.paragraph}>
              It first initiated harm reduction services under the GFATM project by establishing Drop-In Centres (DICs) in high-risk zones across north-western districts of Bangladesh.
            </p>
            <p className={styles.paragraph}>
              Although APOSH was new to harm reduction services for the most at-risk populations, its sincere and dedicated team has contributed significantly to its success in this area.
            </p>
          </div>

          {/* Column 2: Mission, Vision, etc. */}
          <div className={styles.column}>
            <div className={styles.contentBlock}>
              <h5 className={styles.subTitle}><i className="fas fa-bullseye"></i> Mission</h5>
              <p className={styles.paragraph}>
                To empower people who use drugs and marginalized populations through meaningful engagement, advocacy, essential service delivery, capacity building, and networking opportunities, ensuring their health, rights, and wellbeing.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h5 className={styles.subTitle}><i className="fas fa-eye"></i> Vision</h5>
              <p className={styles.paragraph}>
                A society where people who use drugs and other marginalized populations are treated with dignity and respect, free from prejudice, and have access to evidence-based, effective care and support whenever needed.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h5 className={styles.subTitle}><i className="fas fa-map-marker-alt"></i> Working Area</h5>
              <p className={styles.paragraph}>
                APOSH has been rendering its services in 10 districts and 10 Upazilas of Bangladesh. The working areas of APOSH are Rajshahi City Corporation Area, Godagari Upozila, Rajshahi, Chapi Nawabgonj sadar, Dinajpur, Khanpur & Hili, Joypurhat, Naogaon, Rangpur, Saidpur, Lalmonirhat, Panchagarh, Lalmonirhat & Thakurgonj.
              </p>
            </div>

            <div className={styles.imageWrapper}>
              <Image src="/uploads/page_images/image_6.jpg" alt="Community Work" width={400} height={250} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
            </div>

            <div className={styles.listBlock}>
              <h5 className={styles.subTitle}><i className="fas fa-handshake"></i> Donors/Development Contributors</h5>
              <ul className={styles.bulletList}>
                <li>The Global Fund via Save the Children</li>
                <li>USAID</li>
                <li>Department of International Development (DFID)</li>
                <li>United Nations Office on Drugs and Crime (UNDOC)</li>
                <li>United Nations International Children's Emergency Fund (UNICEF)</li>
                <li>CARE Bangladesh</li>
                <li>Youth RISE</li>
                <li>Counterpart International</li>
                <li>HOPE, UK</li>
                <li>Network of Asian People who Use Drugs (NAPUD)</li>
                <li>RCF (Robert Carr Network Funding)</li>
              </ul>
            </div>
          </div>

          {/* Column 3: Partners, Legal Identity, Donors */}
          <div className={styles.column}>
            <div className={styles.imageWrapper}>
              <Image src="/uploads/page_images/image_2.jpg" alt="Community Work" width={400} height={250} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
            </div>

            <div className={styles.listBlock}>
              <h5 className={styles.subTitle}><i className="fas fa-handshake"></i> Development Partners/Organizations</h5>
              <ul className={styles.bulletList}>
                <li>Save the Children</li>
                <li>CARE Bangladesh</li>
                <li>Dhaka Ahsania Mission (DAM)</li>
                <li>Light House</li>
                <li>Mokta Akash Bangladesh (MAB)</li>
                <li>Khulna Mukti Seba Sangstha (KMSS)</li>
                <li>Population Services and Training Center (PSTC)</li>
                <li>Nari and Shishu Kallayan Society (NSKS)</li>
              </ul>
            </div>

            <div className={styles.listBlock}>
              <h5 className={styles.subTitle}><i className="fas fa-file-contract"></i> Legal Identity</h5>
              <ul className={styles.bulletList}>
                <li>Department of Social Services</li>
                <li>Department of Narcotics Control for Drug Treatment Centre</li>
                <li>NGO Affairs Bureau</li>
                <li>Department of Youth Development</li>
                <li>Department of Narcotics Control for Awareness</li>
              </ul>
            </div>
            
            <div className={styles.imageWrapper}>
              <Image src="/uploads/page_images/image_8.jpg" alt="APOSH Activities" width={400} height={250} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
            </div>

            <div className={styles.listBlock}>
              <h5 className={styles.subTitle}><i className="fas fa-list"></i> Major Areas of Intervention</h5>
              <ul className={styles.bulletList}>
                <li>HIV/AIDS Prevention</li>
                <li>Treatment of Drug Dependency</li>
                <li>Detoxification</li>
                <li>Rehabilitation</li>
                <li>Prevention of STI/STD</li>
                <li>Community Awareness</li>
                <li>Advocacy and Networking</li>
                <li>IGA Activities</li>
                <li>Rehabilitation Training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
