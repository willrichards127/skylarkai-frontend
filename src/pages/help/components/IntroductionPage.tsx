import { Box, Typography } from "@mui/material";
import { CircleLogo } from "../../../components/Svgs";

export const IntroductionPage = () => {
  return (
    <Box pb={4}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
        <CircleLogo />
        <Typography variant="h5">Welcome To Skylark AI</Typography>
      </Box>
      <Typography variant="h6" color="primary.main" gutterBottom>
        Skylark AI - Driving AI Industrialization with Customized, Secure, and
        High-Performance Generative AI Solutions
      </Typography>
      <p>
        As we enter the era of AI industrialization, generative AI technologies
        are transforming industries with innovative applications. One of the
        main challenges faced by businesses is customizing pre-trained
        foundation models to suit their unique needs using their own data.
        Skylark AI addresses this challenge by providing an enterprise LLM
        platform that focuses on customization, security, and performance,
        helping enterprises unlock the full potential of AI-powered solutions.
      </p>
      <Typography variant="h6" color="primary.main" gutterBottom>
        The Vision
      </Typography>
      <p>
        Skylark AI envisions a future where businesses across industries can
        seamlessly integrate generative AI technologies into their operations,
        unlocking new levels of growth, efficiency, and innovation. Our mission
        is to make AI accessible and actionable for businesses by providing an
        enterprise LLM platform that facilitates the customization of AI models
        using Reinforcement Learning from Human Feedback (RLHF). This platform
        empowers organizations to create AI models tailored to their specific
        needs while maintaining data security and optimal performance.
      </p>
      <Typography variant="h6" color="primary.main" gutterBottom>
        Unique Capabilities of Skylark AI
      </Typography>
      <p>
        Skylark AI's unique capabilities stem from our focus on three critical
        aspects of generative AI for enterprises:
        <ol>
          <li style={{ paddingBottom: 12 }}>
            Customization: Our platform allows businesses to use their own data
            to customize AI models, ensuring alignment with specific needs and
            requirements. Through RLHF, we create a feedback loop that allows AI
            models to learn from human input, continuously improving and
            adapting to the organization's needs over time.{" "}
          </li>
          <li style={{ paddingBottom: 12 }}>
            Security: Skylark AI prioritizes data security and has designed a
            platform with robust security measures to protect sensitive
            information. Our adherence to stringent data protection standards
            ensures that the customization process remains secure and compliant
            with industry regulations.
          </li>
          <li style={{ paddingBottom: 12 }}>
            Performance: Skylark AI is committed to delivering AI solutions that
            offer optimal performance, enabling businesses to achieve their
            desired outcomes more efficiently and effectively. Our platform is
            designed to ensure that customized AI models are fine-tuned for
            maximum performance, helping clients realize the full benefits of AI
            adoption.
          </li>
        </ol>
      </p>
      <Typography variant="h6" color="primary.main" gutterBottom>
        Reinforcement Learning from Human Feedback (RLHF)
      </Typography>
      <p>
        RLHF is a cornerstone of Skylark AI's approach to customizing AI models.
        This process involves learning from human input, refining the AI model's
        performance iteratively, and ultimately improving its ability to serve
        the unique needs of the enterprise. The RLHF process begins by
        collecting labeled data, which can be generated through collaboration
        with domain experts or by leveraging existing data repositories. This
        data is then used to fine-tune the AI model, with the model's
        performance evaluated against predetermined metrics. As human feedback
        is provided, the model continues to learn and improve, resulting in a
        more accurate and effective AI solution.
      </p>
      <Typography variant="h6" color="primary.main" gutterBottom>
        Market Potential of Skylark AI
      </Typography>
      <p>
        The market potential for Skylark AI's customized generative AI solutions
        is immense. The global AI market is projected to reach $190.61 billion
        by 2025, with a compound annual growth rate (CAGR) of 36.6% from 2018 to
        2025 (Source: MarketsandMarkets). This growth is driven by the
        increasing adoption of AI technologies across various industries,
        including healthcare, finance, retail, manufacturing, and more. The
        generative AI segment, in particular, is experiencing rapid growth, as
        businesses seek innovative ways to unlock new insights, optimize
        processes, and enhance decision-making capabilities. Skylark AI's
        enterprise LLM platform presents a unique opportunity for organizations
        to tap into this growing market and stay ahead of their competition.
      </p>
    </Box>
  );
};
