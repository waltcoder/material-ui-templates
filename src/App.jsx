import React from 'react';
import {
	Typography,
	AppBar,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Toolbar,
	Container,
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const App = () => {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<PhotoCamera className={classes.icon} />
					<Typography variant="h6">Photo Album</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div className={classes.container}>
					<Container maxWidth="sm">
						<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
							Photo Album
						</Typography>
						<Typography variant="h5" align="center" color="textSecondary" className={classes.paragraph} paragraph>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde commodi ipsum error necessitatibus,
							praesentium sit neque voluptas animi perspiciatis sequi?
						</Typography>
						<div className={classes.buttons}>
							<Grid container spacing={2} justify="center">
								<Grid item>
									<Button variant="contained" color="primary">
										see my photo
									</Button>
								</Grid>
								<Grid item>
									<Button variant="outlined" color="primary">
										Secondary action
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container className={classes.cardGrid} maxWidth="md">
					<Grid container spacing={4}>
						{cards.map((card) => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image="https://source.unsplash.com/random"
										title="Image title"
									/>
									<CardContent className={classes.cardContent}>
										<Typography gutterBottom variant="h6">
											Heading
										</Typography>
										<Typography variant="">
											This is a media card, You can use this section to describe the content
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small" color="primary">
											View
										</Button>
										<Button size="small" color="primary">
											Edit
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
				{/* <ButtonGroup variant="contained" aria-label="outlined primary button group">
					<Button>One</Button>
					<Button>Two</Button>
					<Button>Three</Button>
				</ButtonGroup> */}
			</main>
			<footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom>
					Footer
				</Typography>
				<Typography variant="subtitle1" align="center" color="textSecondary">
					Something here to give a footer a purpose!
				</Typography>
				<Typography variant="body2" align="center">
					© waltcoder 2022. All Rights Reserved
				</Typography>
			</footer>
		</>
	);
};

export default App;
