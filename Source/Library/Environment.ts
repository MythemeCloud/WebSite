(await import("dotenv")).config();

export default Zod.z
	.object({
<<<<<<< HEAD
		AUTH_SECRET: z.string().default(""),
		AUTH_TRUST_HOST: z.string().default(""),
		GITHUB_ID: z.string().default(""),
		GITHUB_SECRET: z.string().default(""),
=======
		Token: Zod.z.string().default(""),
>>>>>>> upstream/main
	})
	.parse(process.env);

export const { default: Zod } = await import("zod");
