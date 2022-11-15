import { motionListItems } from '@/assets/animations'
import architecture from '@/assets/architecture.svg'
import { HeaderDecoration } from '@/components/HeaderDecoration'
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
        <div className='dark:bg-suse_jungle_green pattern-bg relative box-border'>
          <div className='grid content-center align-middle md:mb-6 md:grid-cols-1 mx-auto w-5/6 2xl:w-4/6 py-20'>
            <motion.div initial='hidden' animate='visible' variants={motionListItems} className='self-center col-span-1'>
              <p className='text-3xl md:mb-10 font-bold text-center text-white dark:text-white'>Container security for cloud-native ecosystems.</p>
            </motion.div>
          </div>
          <HeaderDecoration />
        </div>

        {/** 👀 About section */}
        <div className='grid gap-6 mx-auto w-5/6 2xl:w-4/6 pt-14'>
          <div className='grid grid-flow-row gap-8 mb-10'>
            <p className='md:mt-10 text-3xl font-bold text-center text-dark dark:text-white'>What is OpenZeroTrust?</p>
            <div>
              <motion.p className='grid grid-flow-row gap-4 text-base py-2' initial='hidden' animate='visible' variants={motionListItems}>
                Open Zero Trust (OZT) is an open source, full lifecycle container security platform that delivers complete container security with uncompromising end-to-end protection.
              </motion.p>
              <motion.ul className='py-2 ml-8 list-disc' initial='hidden' animate='visible' variants={motionListItems}>
                <li className=''>Protect your applications and supply chain - from end-to-end vulnerability scanning to automated runtime protection.</li>
                <li>True Layer 7 container firewall - identify and neutralize threats coming via your network as well as prevent data leaks.</li>
                <li> Zero-Trust Controls - protect from zero days and threats coming from unexpected application behaviors without all the noise of false positives.</li>
              </motion.ul>
            </div>
            <motion.div className='bg-gray-100 text-black border-l-4 border-blue-500 font-light p-2 rounded-sm gap-4 text-sm' initial='hidden' animate='visible' variants={motionListItems}>
              OZT is the upstream open source project for {''}
              <a href='https://neuvector.com' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 underline hover:cursor-pointer'>
                SUSE NeuVector {''}
              </a>
              - a fully supported, enterprise-grade container lifecycle security platform from {''}
              <a href='https://suse.com' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 underline hover:cursor-pointer'>
                SUSE
              </a>
              .
            </motion.div>
          </div>
        </div>
        
        {/** 👀 How to section */}
        <div className='dark:bg-suse-pine_green bg-blue-50 relative'>
          <p className='text-3xl mt-10 font-bold text-center text-dark dark:text-white'>Why use Open Zero Trust?</p>
          {/* <div className='grid md:grid-cols-2 gap-4 m-16 mx-auto w-5/6 2xl:w-4/6'> */}
          <div className='grid md:grid-cols-2 gap-4 m-16 mx-auto w-5/6 2xl:w-4/6'>
            <div className='dark:bg-suse-fog border-blue-500 border-opacity-30 bg-white border-2 p-4'>
              <h2 className='text-blue-500  font-bold text-2xl'>Vulnerability Management</h2>
              <p className='text-bold my-4 text-sm font-bold'>Scanning from pipeline to production.</p>
              <motion.p className='grid grid-flow-row gap-4 ' initial='hidden' animate='visible' variants={motionListItems}>
                Continuously scan throughout the container lifecycle. Fast, accurate and scalable.
              </motion.p>
            </div>

            <div className='dark:bg-suse-fog border-blue-500 border-opacity-30 bg-white border-2 p-4'>
              <h2 className='text-blue-500  font-bold text-2xl'>Application Protection</h2>
              <p className='text-bold my-4 text-sm font-bold'>Behaviour-based Zero trust for containers in production.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Kill known and unknown threats with our DPI (Deep Packet Inspection) technology before they reach your applications and secure them with behavior-base Zero-Trust security policies. Protect your network, files, and processes.
              </motion.p>
            </div>

            <div className='dark:bg-suse-fog border-blue-500 border-opacity-30 bg-white border-2 p-4'>
              <h2 className='text-blue-500  font-bold text-2xl'>Supply Chain Security</h2>
              <p className='text-bold my-4 text-sm font-bold'>Shift security left without slowing down.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Open Zero Trust is Kubernetes-native and easily integrates into your CI/CD pipelines with complete vulnerability management, compliance scanning, admission controls and security policies easily applied via CRDs.
              </motion.p>
            </div>

            <div className='dark:bg-suse-fog border-blue-500 border-opacity-30 bg-white border-2 p-4'>
              <h2 className='text-blue-500  font-bold text-2xl'>Network Visibility</h2>
              <p className='text-bold my-4 text-sm font-bold'>360 degree view for 100% visibility.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Layer 7 visibility within and between pods and network mapping, we use our own DPI technology understands layer 7 application protocols to detect and kill threats before they reach your applications.
              </motion.p>
            </div>

            <div className='dark:bg-suse-fog border-blue-500 border-opacity-30 bg-white border-2 p-4'>
              <h2 className='text-blue-500  font-bold text-2xl'>Container Segmentation</h2>
              <p className='text-bold my-4 text-sm font-bold'>Protect PII. Essential for PCI and other mandates.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                We have you covered with automated, audit-ready compliance assessment and reporting. OZT will help you sail through PCI, SOC2 and other audits with less stress.
              </motion.p>
            </div>

            <div className='dark:bg-suse-fog border-blue-500 border-opacity-30 bg-white border-2 p-4'>
              <h2 className='text-blue-500  font-bold text-2xl'>Compliance</h2>
              <p className='text-bold my-4 text-sm font-bold'>Exceed the standards. DLP included.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                With our Data Leek Prevention technology and DPI, OZT creates a virtual wall to keep personal and private information securely isolated inside your network, preventing it from leaking to the outside.
              </motion.p>
            </div>
          </div>
        </div>

        <div className='grid gap-6 mx-auto w-5/6 2xl:w-4/6'>
          <div className='grid grid-flow-row gap-14 mb-10'>
            <p className='text-3xl font-bold text-center text-dark dark:text-white'>How it works?</p>
              <motion.div className='grid grid-flow-row gap-4 text-sm ' initial='hidden' animate='visible' variants={motionListItems}>
                <Image width='771px' height='687px' src={architecture.src} alt='OpenZeroTrust Architecture diagram' />
              </motion.div>
          </div>
        </div>

        <hr />

        {/** 👀 Getting started section */}
        <div className='mx-auto w-5/6 2xl:w-4/6  p-8'>
          <p className='text-2xl my-4 text-left text-secondary-dark '>Getting started</p>
          <div className='grid grid-flow-row md:grid-cols-3 gap-6'>
            <div>
              <p>Images are available on the OZT Docker Hub registry. Use the appropriate version tag for the manager, controller, enforcer, and leave the version as ‘latest’ for scanner and updater</p>
              <ul className='flex flex-col gap-2 p-4 ml-4 list-disc text-gray-800'>
                <li>openzerotrust/manager:5.0.3</li>
                <li>openzerotrust/controller:5.0.3</li>
                <li>openzerotrust/enforcer:5.0.3</li>
                <li>openzerotrust/scanner:latest</li>
                <li>openzerotrust/updater:latest</li>
              </ul>
            </div>
            <div>
              <p>If deploying with the current OZT Helm chart (v1.8.9+), the following changes should be made to values.yml:</p>
              <ul className='ml-4 flex flex-col gap-2 p-4 text-gray-800 list-decimal'>
                <li>Update the registry to docker.io</li>
                <li>Update image names/tags to the preview version on Docker hub</li>
                <li>Leave the imagePullSecrets empty</li>
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <a href='https://github.com/openzerotrust/openzerotrust-helm' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all flex align-middle justify-center px-auto py-2 font-bold no-underline text-white bg-blue-500 dark:text-white dark:bg-blue-500 hover:underline hover:cursor-pointer'>
                Deploy Using Helm Charts
              </a>
              <a href='https://open-docs.neuvector.com/deploying/kubernetes' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all no-underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-blue-500 dark:text-white dark:bg-blue-500 hover:underline hover:cursor-pointer'>
                Deploy on Kubernetes
              </a>
              <a href='https://open-docs.neuvector.com/deploying/production/operators ' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all no-underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-blue-500 dark:text-white dark:bg-blue-500 hover:underline hover:cursor-pointer'>
                OpenShift Operator
              </a>
            </div>
          </div>
        </div>
        {/** 👀 Get involved */}
        <div className='relative bg-blue-500'>
          <div className='grid grid-flow-row md:grid-cols-2 gap-8 my-10  w-5/6 2xl:w-4/6 mx-auto'>
            <div className='flex flex-col gap-4 p-8 bg-white dark:bg-suse-midnight_blue box-border'>
              <p className='text-2xl mb-4 text-left text-bold text-blue-800 dark:text-white'>How to get involved</p>

              <p>OpenZeroTrust is an open source project hosted on GitHub.</p>
              <p>Bugs and feature requests are tracked through GitHub issues and new code is reviewed through pull requests.</p>

              <div className='grid grid-flow-row md:grid-cols-2 gap-4'>
                <a href='https://github.com/openzerotrust' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all no-underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-blue-500 dark:text-white hover:underline hover:cursor-pointer '>
                  Issues
                </a>
                <a href='https://github.com/openzerotrust' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all no-underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-blue-500 dark:text-white hover:underline hover:cursor-pointer '>
                  Pull Request
                </a>
              </div>
            </div>

            <div className='flex flex-col gap-4 p-8 bg-white'>
              <p className='text-2xl mb-4 text-left text-bold text-blue-800 dark:text-white'>How to get support</p>

              <p>Found an issue or have a problem? Community support happens in the #openzerotrust channel in Rancher Slack and in GitHub Issues, where you can search and file new issues. </p>
              <p></p>
              <p></p>
              <div className='grid grid-flow-row md:grid-cols-2 gap-4'>
                <a href='https://slack.rancher.io/ ' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all no-underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-blue-500 dark:text-white hover:underline hover:cursor-pointer'>
                  Rancher Users Slack
                </a>
                <a href='https://github.com/openzerotrust' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all no-underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-blue-500 dark:text-white hover:underline hover:cursor-pointer'>
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
