import "./globals.css";
			export const metadata = {
				title: "RICK & MORTY CHARACTERS",
        descripton: "Meu primeiro consumo de API grátis"
			};
			export default function RootLayout({ children }) {
				return (
					<html>
						<body>{children}</body>
					</html>
);
}