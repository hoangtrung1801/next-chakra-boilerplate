import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const repoLink = "https://github.com/hoangtrung1801/next-chakra-boilerplate";

const CTASection = () => {
    return (
        <Box textAlign="center">
            <Flex marginY={4} justifyContent="center" gap={2}>
                <Link
                    aria-label="Deploy to Vercel"
                    isExternal
                    rel="noopener noreferrer"
                    href={`https://vercel.com/import/git?s=${repoLink}`}
                >
                    <Image
                        src="https://vercel.com/button"
                        alt="Vercel deploy button"
                    />
                </Link>

                <Link
                    aria-label="Deploy to Netlify"
                    isExternal
                    rel="noopener noreferrer"
                    href={`https://app.netlify.com/start/deploy?repository=${repoLink}`}
                >
                    <Image
                        src="https://www.netlify.com/img/deploy/button.svg"
                        alt="Netlify deploy button"
                    />
                </Link>
            </Flex>

            <Flex justifyContent="center" alignItems="center" gap={2}>
                <Button
                    as="a"
                    href={`${repoLink}/generate`}
                    target="_blank"
                    size="sm"
                >
                    Use This Template
                </Button>
                <Button
                    as="a"
                    href={repoLink}
                    target="_blank"
                    leftIcon={<AiFillGithub />}
                    size="sm"
                >
                    Open in Github
                </Button>
            </Flex>
        </Box>
    );
};

export default CTASection;
