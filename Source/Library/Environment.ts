(await import("dotenv")).config();

export default Zod.z
	.object({
		AUTH_SECRET: z.string().default(""),
		AUTH_TRUST_HOST: z.string().default(""),
		GITHUB_ID: z.string().default(""),
		GITHUB_SECRET: z.string().default(""),
	})
	.parse(process.env);

export const { default: Zod } = await import("zod");
