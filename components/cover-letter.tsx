'use client'

import React, { useState } from "react";
import { track } from '@vercel/analytics';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Chip } from "@nextui-org/react";

export default function CoverLetter() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isViewed, setIsViewed] = useState(false);

  if (isOpen && !isViewed) {
    track('cover-letter-viewed', {}, { flags: ['cover-letter-viewed'] });
    setIsViewed(true);
  }

  return (
    <div role="alert" className="bg-secondary-500 text-white p-2 rounded-lg flex gap-2 w-full">
      🐰
      <div>
        <span>
          Actively seeking a remote or visa support front-end / fullstack engineer position
        </span>
        <br />
        <Chip className="cursor-pointer" color="warning" onClick={() => onOpen()}>Cover Letter</Chip>
      </div>

      <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Hello!</ModalHeader>
              <ModalBody>
                <p>
                  I’m Yujian (Larry) Xue, a passionate and results-driven Front-End Developer with over two years of professional experience. Currently working at eSurfing Cloud, I specialize in creating dynamic and engaging web applications using a range of modern technologies. My expertise spans JavaScript, TypeScript, Vue.js, Next.js, and more, allowing me to build high-quality user interfaces and seamless user experiences.
                </p>
                <p className="font-bold">My Philosophy</p>
                <p>I believe in the power of asynchronous work and thrive in remote work environments. The flexibility and freedom that come with remote work enable me to explore new challenges and innovate without boundaries. Driven by a geeky spirit, I am always eager to tackle the unknown and embrace new technologies. This approach allows me to stay agile, continuously learn, and push the boundaries of what’s possible.</p>
                <p className="font-bold">
                  My professional journey has included:
                </p>
                <li>
                  Frontend Developer at eSurfing Cloud: I have developed and optimized various web applications, such as the CDN Console and the Live Streaming Acceleration Configuration Platform. My work involved using Vue.js, TypeScript, and other tools to enhance performance and user experience.
                </li>
                <li>
                  Freelancer Frontend Developer: Before joining eSurfing Cloud, I took on diverse projects, honing my skills and adapting to different client needs. This role sharpened my ability to deliver tailored solutions efficiently.
                </li>
                In addition to my professional work, I manage several side projects and contribute to open source. Some highlights include:
                <li>
                  AI Hub: A project built with Nuxt.js and Cloudflare Worker AI, featuring OAuth login and customizable AI site deployment.
                </li>
                <li>Folder to JSON: A web application using the showDirectoryPicker API to create a JSON tree structure of local directories.</li>
                <li>Vite Vue2 Starter Template: A template for quickly starting Vue.js 2 projects using Vite v5.</li>
                <p>My technical skills are complemented by my experience with agile development, Git, and modern front-end frameworks like Next.js and Vue.js. I’m committed to continuous learning and staying updated with the latest industry trends.</p>
                <p>If you’re interested in exploring potential opportunities, collaborations, or just want to connect, feel free to reach out to me.</p>
                <p>
                  Thank you for visiting my site!
                </p>
                <p>
                  Best regards,
                </p>
                <p>
                  Yujian (Larry) Xue
                </p>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button variant="ghost" onClick={() => window.location.href = "/contact"}>✍️Contact Me</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
