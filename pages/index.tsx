import { motionListItems } from '@/assets/animations'
import { OpenZeroTrustSVG } from '@/assets/images'
import { VideoBox } from '@/components/VideoBox'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>OpenZeroTrust </title>
        <meta name='description' content='Continuously scan throughout the container lifecycle Automate security Protect your applications from the unknown' />
        {/** 👀 Replace with your custom favicon.ico */}
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='grid grid-flow-row gap-8 text-sm'>
        {/** 👀 Call to Action section */}
        <div className='dark:bg-suse_jungle_green bg-suse-jungle_green relative box-border boder-top-width:3px'>
          <div className='grid grid-row-2 content-center align-middle gap-14 md:grid-cols-3 mx-auto w-5/6 2xl:w-4/6 py-20'>
            <motion.div initial='hidden' animate='visible' variants={motionListItems} className='self-center col-span-1'>
{/*              <div className='my-4 col-span-2'> */}
{/*                <OpenZeroTrustSVG className='w-60 fill-current text-primary-light dark:text-primary my-4' /> */}
{/*              </div> */}
              <p className='text-3xl font-bold text-left text-white dark:text-white'>Container security for cloud-native ecosystems</p>
            </motion.div>
              <div className='grid grid-colomn-4 content-left col-span-2'>
                <div className='dark:text-white text-black font-bold text-2xl'>Great for</div>
                <div className='dark:text-white font-bold text-2xl'>
                  <h2>- Protecting your applications right from the start</h2>
                  <h2>- Continuously scan throughout the container lifecycle</h2>
                  <h2>- Remove security roadblocks</h2>
                  <h2>- Automate your security!</h2>
                </div>
              </div>

{/*            <div className='col-span-1'>
              <VideoBox url='https://www.youtube.com/watch?v=_PHDXvygJtU' />
            </div>  */}
          </div>
        </div>

        {/** 👀 About section */}
        <div className='grid gap-6 mx-auto w-5/6 2xl:w-4/6'>
          <div className='grid grid-flow-row gap-14 mb-10'>
            <div className='grid grid-colomn-4 content-middle-span-2 dark:text-white text-suse-pine_green font-bold text-2xl'>
              <p className='text-3xl font-bold text-center text-dark dark:text-white'>What is OpenZeroTrust?</p>
            </div>
            <div>
              <motion.p className='grid grid-flow-row gap-4 text-sm ' initial='hidden' animate='visible' variants={motionListItems}>
OpenZeroTrust is an open source full Lifecycle Container Security platform that delivers complete container security with uncompromising end-to-end protection.<br/>
From DevOps vulnerability scanning to automated runtime protection, OpenZeroTrust enables you to fully protect your applications and supply chain.

OpenZeroTrust features a true Layer 7 container firewall that can identify and drop-dead threats coming via your network as well as prevent data leaks.<br/>
And with our behavior-based Zero-Trust policies, tailor made for your application, it can be protecte even from zero days and threats coming from unexpected application behaviors without all the noise of false positives. 
Thanks to the application-behavior learning capabilities these policies tailor made for your application can be created easily and in an automated way.
             </motion.p>
              <motion.p className='grid grid-flow-row gap-4 text-sm ' initial='hidden' animate='visible' variants={motionListItems}>
It offers DevOps, DevSecOps, and Security teams the tool they need to secure and protect the entire container pipeline, from Build to Ship to Run, automatically, with security-as-code so they can focus on delivering great applications instead..
              </motion.p><br/>
              <motion.p className='gap-4 text-sm ' initial='hidden' animate='visible' variants={motionListItems}>
OpenZeroTrust is the upstream open source project for <a href='https://neuvector.com' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 underline hover:cursor-pointer'>NeuVector</a> - a fully supported, enterprise-grade container lifecycle security platform from <a href='https://suse.com' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 underline hover:cursor-pointer'>SUSE</a>.
              </motion.p>
            </div>
          </div>
          <div className='grid grid-flow-row md:grid-cols-3 gap-14 mb-10 relative'>
            <div className='dark:bg-suse-fog bg-suse-white border-suse-jungle_green border-2 p-4'>
              <h2 className='text-secondary-dark dark:text-primary font-bold text-2xl'>Vulnerability Management</h2>
              <p className='text-bold my-4 text-sm font-bold'>Scanning from pipeline to production.</p>
              <motion.p className='grid grid-flow-row gap-4 ' initial='hidden' animate='visible' variants={motionListItems}>
                Continuously scan throughout the container lifecycle. Fast, accurate and scalable.
              </motion.p>
            </div>

            <div className='dark:bg-suse-fog bg-suse-white border-suse-jungle_green border-2 p-4'>
              <h2 className='text-secondary-dark dark:text-primary font-bold text-2xl'>Application Protection</h2>
              <p className='text-bold my-4 text-sm font-bold'>Behaviour-based Zero trust for containers in production.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Kill known and unknown threats with our DPI ( Deep Packet Inspection ) technology before they reach your applications and secure them with behavior-base Zero-Trust security policies. Protect your network, files, and processes.
              </motion.p>
            </div>

            <div className='dark:bg-suse-fog bg-suse-white border-suse-jungle_green border-2 p-4'>
              <h2 className='text-secondary-dark dark:text-primary font-bold text-2xl'>Supply Chain Security</h2>
              <p className='text-bold my-4 text-sm font-bold'>Shift security left without slowing down.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                OpenZeroTrust is Kubernetes native and easily integrates into your CI/CD pipelines with complete vulnerability management, compliance scanning, admission controls and security policies easily applied via CRDs.
              </motion.p>
            </div>

            <div className='dark:bg-suse-fog bg-suse-white border-suse-jungle_green border-2 p-4'>
              <h2 className='text-secondary-dark dark:text-primary font-bold text-2xl'>Network Visibility</h2>
              <p className='text-bold my-4 text-sm font-bold'>360 degree view for 100% visibility.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Layer 7 visibility within and between pods and network mapping, we use our own DPI ( Deep Packet Inspection ) technology understands layer 7 ( application ) protocols to detect and kill threats before they reach your applications.
              </motion.p>
            </div>

            <div className='dark:bg-suse-fog bg-suse-white border-suse-jungle_green border-2 p-4'>
              <h2 className='text-secondary-dark dark:text-primary font-bold text-2xl'>Container Segmentation</h2>
              <p className='text-bold my-4 text-sm font-bold'>Protect PII. Essential for PCI and other mandates.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                We have you covered with automated, audit-ready compliance assessment and reporting. Sail through PCI, SOC2 and other audits with less stress.
              </motion.p>
            </div>

            <div className='dark:bg-suse-fog bg-suse-white border-suse-jungle_green border-2 p-4'>
              <h2 className='text-secondary-dark dark:text-primary font-bold text-2xl'>Compliance</h2>
              <p className='text-bold my-4 text-sm font-bold'>Exceed the standards. DLP included.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                With our Data Leek Prevention technology and DPI, OpenZeroTrust creates a virtual wall to keep personal and private information securely isolated inside your network, preventing it from leaking to the outside.
              </motion.p>
            </div>
          </div>
        </div>

        {/** 👀 How to section */}
{/*        <div className='dark:bg-suse-pine_green bg-suse-fog relative'>
          <div className='grid md:grid-cols-2 gap-4 m-16 mx-auto w-5/6 2xl:w-4/6'>
            <p className='text-secondary-dark dark:text-primary font-light text-3xl '>
              Automate Container Security from Pipeline <br /> to Production
            </p>

            <div className='grid grid-flow-row gap-4 2xl:gap-8'>
              <Image layout='fill' src="/assets/diagrams//openzerotrust_architecture.png" alt='OpenZeroTrust Architecture diagram' />
              <p>
                OpenZeroTrust is kubernetes-native, you can use CRDs to load policies and other settings the same way you do with other kubernetes native applications, moreover with its API you can do everything that is done via the UI allowing you to easily integrate it with other tools.


                Our end-to-end vulnerability management gives you a continuous risk profile on known threats.
                Our DPI ( Deep Packet Inspection ) technology starts blocking on Day 1 to protect your infrastructure from known and unknown threats.
                Our behavioral learning and Security as Code automation processes improve the flow between development and security.
                Creating security policies based on your application behavior that helps prevent future exposure.
              </p>
            </div>
          </div>
        </div>
*/}

        <div className='grid gap-6 mx-auto w-5/6 2xl:w-4/6'>
          <div className='grid grid-flow-row gap-14 mb-10'>
            <div className='grid grid-colomn-4 content-middle-span-2 dark:text-white text-suse-pine_green font-bold text-2xl'>
              <p className='text-3xl font-bold text-center text-dark dark:text-white'>How it works?</p>
            </div>
            <div>
              <motion.p className='grid grid-flow-row gap-4 text-sm ' initial='hidden' animate='visible' variants={motionListItems}>
                <Image width='771px' height='687px' src="https://github.com/openzerotrust/.github/raw/main/images/ozt_arch.png" alt='OpenZeroTrust Architecture diagram' />
              </motion.p>
            </div>
          </div>
        </div>

        {/** 👀 Getting started section */}
        <div className='mx-auto w-5/6 2xl:w-4/6 bg-suse-fog p-8'>
          <p className='text-2xl my-4 text-left text-secondary-dark dark:text-primary'>Getting started</p>
          <div className='grid grid-flow-row md:grid-cols-3 gap-6'>
            <div>
              <p>Images are available on the OpenZeroTrust Docker Hub registry. Use the appropriate version tag for the manager, controller, enforcer, and leave the version as ‘latest’ for scanner and updater. For example:</p>
              <ul className='flex flex-col gap-2 p-4 list-disc'>
                <li>openzerotrust/manager:5.0.3</li>
                <li>openzerotrust/controller:5.0.3</li>
                <li>openzerotrust/enforcer:5.0.3</li>
                <li>openzerotrust/scanner:latest</li>
                <li>openzerotrust/updater:latest</li>
              </ul>
            </div>
            <div>
              <p>If deploying with the current OpenZeroTrust Helm chart (v1.8.9+), the following changes should be made to values.yml:</p>
              <ul className='flex flex-col gap-2 p-4 list-disc'>
                <li>Update the registry to docker.io</li>
                <li>Update image names/tags to the preview version on Docker hub</li>
                <li>Leave the imagePullSecrets empty</li>
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <a href='https://github.com/openzerotrust/openzerotrust-helm' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all flex align-middle justify-center px-auto py-2 font-bold no-underline text-white bg-suse-jungle_green dark:text-white dark:bg-suse-jungle_green hover:underline hover:cursor-pointer'>
                Deploy Using Helm Charts
              </a>
              <a href='https://open-docs.neuvector.com/deploying/kubernetes' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all no-underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-suse-jungle_green dark:text-white dark:bg-suse-jungle_green hover:underline hover:cursor-pointer'>
                Deploy on Kubernetes
              </a>
              <a href='https://open-docs.neuvector.com/deploying/production/operators ' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all no-underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-suse-jungle_green dark:text-white dark:bg-suse-jungle_green hover:underline hover:cursor-pointer'>
                OpenShift Operator
              </a>
            </div>
          </div>
        </div>
        {/** 👀 Get involved */}
{/*        <div className='relative mx-auto w-5/6 2xl:w-4/6 bg-suse-fog'>   */}
        <div className='relative bg-suse-jungle_green'>
          <div className='grid grid-flow-row md:grid-cols-2 gap-8 my-10  w-5/6 2xl:w-4/6 mx-auto'>
            <div className='flex flex-col gap-4 p-8 bg-white dark:bg-suse-midnight_blue box-border'>
              <p className='text-2xl mb-4 text-left text-bold text-suse-persimmon dark:text-white'>How to get involved</p>

              <p>OpenZeroTrust is an open source project hosted on GitHub.</p>
              <p>Bugs and feature requests are tracked through GitHub issues and new code is reviewed through pull requests.</p>

              <div className='grid grid-flow-row md:grid-cols-2 gap-4'>
                <a href='https://github.com/openzerotrust' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all no-underline flex align-middle justify-center px-auto py-2 font-bold text-black bg-suse-jungle_green dark:text-white dark:bg-primary hover:underline hover:cursor-pointer '>
                  Issues
                </a>
                <a href='https://github.com/openzerotrust' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all no-underline flex align-middle justify-center px-auto py-2 font-bold text-black bg-suse-jungle_green dark:text-white dark:bg-primary hover:underline hover:cursor-pointer '>
                  Pull Request
                </a>
              </div>
            </div>

            <div className='flex flex-col gap-4 p-8 bg-white dark:bg-suse-waterhole_blue'>
              <p className='text-2xl mb-4 text-left text-bold text-suse-persimmon dark:text-white'>How to get support</p>

              <p>Found an issue or have a problem? Community support happens in the #openzerotrust channel in Rancher Slack and in GitHub Issues, where you can search and file new issues. </p>
              <p></p>
              <div className='grid grid-flow-row md:grid-cols-2 gap-4'>
                <a href='https://slack.rancher.io/ ' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all no-underline flex align-middle justify-center px-auto py-2 font-bold text-black bg-suse-jungle_green dark:text-white dark:bg-primary hover:underline hover:cursor-pointer'>
                  Rancher Users Slack
                </a>
                <a href='https://github.com/openzerotrust' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all no-underline flex align-middle justify-center px-auto py-2 font-bold text-black bg-suse-jungle_green dark:text-white dark:bg-primary hover:underline hover:cursor-pointer'>
                  Issues
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
