import React, { memo, useCallback, useEffect, useState } from "react";
import { Box, Typography, Stack, TextField } from "@mui/material";
import {
	LeftArrowDecorator,
	RightArrowDecorator,
} from "../../components/Svgs";
import { NeutralButton } from "../../components/buttons/NeutralButton";
import { useLoginUserMutation } from "../../redux/services/authAPI";
import { Link, useNavigate } from "react-router-dom";

// https://codevoweb.com/setup-and-use-nextauth-in-nextjs-13-app-directory/
// https://medium.com/ascentic-technology/authentication-with-next-js-13-and-next-auth-9c69d55d6bfd

const LoginForm = memo(() => {
	const navigate = useNavigate();

	const [loginUser, { data, isLoading, isError }] = useLoginUserMutation();
	const [form, setForm] = useState<{
		email: string;
		password: string;
	}>({
		email: "",
		password: "",
	});

	const onChangeValues = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
		},
		[]
	);

	const onSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			loginUser({
				email: form.email,
				password: form.password,
			});
		},
		[form, loginUser]
	);

	useEffect(() => {
		if (!isError && !!data) {
			navigate("/main/reports");
		}
	}, [navigate, isError, data]);

	return (
		<Box
			sx={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Box minWidth={440} mb={8}>
				<form onSubmit={onSubmit}>
					<Box
						sx={{
							display: "flex",
							gap: 3,
							alignItems: "center",
							justifyContent: "center",
							mb: 8,
						}}
					>
						<RightArrowDecorator />
						<Typography variant='h5'>Login</Typography>
						<LeftArrowDecorator />
					</Box>
					<Stack spacing={6}>
						<TextField
							placeholder='Enter your email'
							label='Email'
							type='email'
							name='email'
							value={form.email}
							onChange={onChangeValues}
						/>
						<Box textAlign='right'>
							<TextField
								placeholder='Enter your password'
								label='Password'
								type='password'
								name='password'
								fullWidth
								value={form.password}
								onChange={onChangeValues}
							/>
							<Typography variant='body2' mt={1}>
								<Box
									component={Link}
									to='/auth/forgot-password'
									sx={{
										color: "primary.main",
										textDecoration: "none",
										fontWeight: "bold",
									}}
								>
									Forgot Password
								</Box>
							</Typography>
						</Box>
					</Stack>
					<NeutralButton
						fullWidth
						variant='contained'
						size='large'
						type='submit'
						sxProps={{ mt: 6, mb: 1 }}
						disabled={!form.email || !form.password || isLoading}
					>
						Login
					</NeutralButton>
				</form>
				<Box textAlign='center'>
					<Typography variant='body2'>
						Don&apos;t have an account?{" "}
						<Box
							component={Link}
							to='/auth/register'
							sx={{
								color: "primary.main",
								textDecoration: "none",
								fontWeight: "bold",
							}}
						>
							Create One
						</Box>
					</Typography>
				</Box>
			</Box>
		</Box>
	);
});

LoginForm.displayName = "LoginForm";
export default LoginForm;
