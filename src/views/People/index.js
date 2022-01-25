import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";


export default class Home extends Component {
  render() {
    return (
	<>
		<div className="wrapper">
			<div className="content-page">
				<div className="content">
					<div className="navbar-custom topnav-navbar topnav-navbar-dark">
						<div className="container-fluid">
							<a href="" className="topnav-logo">
							<span className="topnav-logo-lg">
							<img src="../images/logo-light.png" alt="" height="16"/>
							</span>
							<span className="topnav-logo-sm">
							<img src="../images/logo_sm_dark.png" alt="" height="16"/>
							</span>
							</a>
							<ul className="list-unstyled topbar-right-menu float-right mb-0">
								<li className="dropdown notification-list d-lg-none">
									<a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
									<i className="dripicons-search noti-icon"></i>
									</a>
									<div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
										<form className="p-3">
											<input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
										</form>
									</div>
								</li>
								<li className="dropdown notification-list topbar-dropdown d-none d-lg-block">
									<a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" id="topbar-languagedrop" href="#" role="button" aria-haspopup="true" aria-expanded="false">
									<img src="../images/flags/us.jpg" alt="user-image" className="mr-1" height="12"/> <span className="align-middle">English</span> <i className="mdi mdi-chevron-down align-middle"></i>
									</a>
									<div className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu" aria-labelledby="topbar-languagedrop">
									
										<a href="javascript:void(0);" className="dropdown-item notify-item">
										<img src="../images/flags/germany.jpg" alt="user-image" className="mr-1" height="12"/> <span className="align-middle">German</span>
										</a>
								
										<a href="javascript:void(0);" className="dropdown-item notify-item">
										<img src="../images/flags/italy.jpg" alt="user-image" className="mr-1" height="12"/> <span className="align-middle">Italian</span>
										</a>
								
										<a href="javascript:void(0);" className="dropdown-item notify-item">
										<img src="../images/flags/spain.jpg" alt="user-image" className="mr-1" height="12"/> <span className="align-middle">Spanish</span>
										</a>
									
										<a href="javascript:void(0);" className="dropdown-item notify-item">
										<img src="../images/flags/russia.jpg" alt="user-image" className="mr-1" height="12"/> <span className="align-middle">Russian</span>
										</a>
									</div>
								</li>
								<li className="dropdown notification-list">
									<a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" id="topbar-notifydrop" role="button" aria-haspopup="true" aria-expanded="false">
									<i className="dripicons-bell noti-icon"></i>
									<span className="noti-icon-badge"></span>
									</a>
									<div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg" aria-labelledby="topbar-notifydrop">
									
										<div className="dropdown-item noti-title">
											<h5 className="m-0">
												<span className="float-right">
												<a href="javascript: void(0);" className="text-dark">
												<small>Clear All</small>
												</a>
												</span>Notification
											</h5>
										</div>
										<div style={{"max-height": "230px"}} data-simplebar>
										
											<a href="javascript:void(0);" className="dropdown-item notify-item">
												<div className="notify-icon bg-primary">
													<i className="mdi mdi-comment-account-outline"></i>
												</div>
												<p className="notify-details">Caleb Flakelar commented on Admin
													<small className="text-muted">1 min ago</small>
												</p>
											</a>
											
											<a href="javascript:void(0);" className="dropdown-item notify-item">
												<div className="notify-icon bg-info">
													<i className="mdi mdi-account-plus"></i>
												</div>
												<p className="notify-details">New user registered.
													<small className="text-muted">5 hours ago</small>
												</p>
											</a>
											
											<a href="javascript:void(0);" className="dropdown-item notify-item">
												<div className="notify-icon">
													<img src="../images/users/avatar-2.jpg" className="img-fluid rounded-circle" alt="" /> 
												</div>
												<p className="notify-details">Cristina Pride</p>
												<p className="text-muted mb-0 user-msg">
													<small>Hi, How are you? What about our next meeting</small>
												</p>
											</a>
											
											<a href="javascript:void(0);" className="dropdown-item notify-item">
												<div className="notify-icon bg-primary">
													<i className="mdi mdi-comment-account-outline"></i>
												</div>
												<p className="notify-details">Caleb Flakelar commented on Admin
													<small className="text-muted">4 days ago</small>
												</p>
											</a>
											
											<a href="javascript:void(0);" className="dropdown-item notify-item">
												<div className="notify-icon">
													<img src="../images/users/avatar-4.jpg" className="img-fluid rounded-circle" alt="" /> 
												</div>
												<p className="notify-details">Karen Robinson</p>
												<p className="text-muted mb-0 user-msg">
													<small>Wow ! this admin looks good and awesome design</small>
												</p>
											</a>
											
											<a href="javascript:void(0);" className="dropdown-item notify-item">
												<div className="notify-icon bg-info">
													<i className="mdi mdi-heart"></i>
												</div>
												<p className="notify-details">Carlos Crouch liked
													<b>Admin</b>
													<small className="text-muted">13 days ago</small>
												</p>
											</a>
										</div>
										
										<a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">
										View All
										</a>
									</div>
								</li>
								<li className="dropdown notification-list d-none d-sm-inline-block">
									<a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
									<i className="dripicons-view-apps noti-icon"></i>
									</a>
									<div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg p-0">
										<div className="p-2">
											<div className="row no-gutters">
												<div className="col">
													<a className="dropdown-icon-item" href="#">
													<img src="../images/brands/slack.png" alt="slack"/>
													<span>Slack</span>
													</a>
												</div>
												<div className="col">
													<a className="dropdown-icon-item" href="#">
													<img src="../images/brands/github.png" alt="Github"/>
													<span>GitHub</span>
													</a>
												</div>
												<div className="col">
													<a className="dropdown-icon-item" href="#">
													<img src="../images/brands/dribbble.png" alt="dribbble"/>
													<span>Dribbble</span>
													</a>
												</div>
											</div>
											<div className="row no-gutters">
												<div className="col">
													<a className="dropdown-icon-item" href="#">
													<img src="../images/brands/bitbucket.png" alt="bitbucket"/>
													<span>Bitbucket</span>
													</a>
												</div>
												<div className="col">
													<a className="dropdown-icon-item" href="#">
													<img src="../images/brands/dropbox.png" alt="dropbox"/>
													<span>Dropbox</span>
													</a>
												</div>
												<div className="col">
													<a className="dropdown-icon-item" href="#">
													<img src="../images/brands/g-suite.png" alt="G Suite"/>
													<span>G Suite</span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li className="notification-list">
									<a className="nav-link right-bar-toggle" href="javascript: void(0);">
									<i className="dripicons-gear noti-icon"></i>
									</a>
								</li>
								<li className="dropdown notification-list">
									<a className="nav-link dropdown-toggle nav-user arrow-none mr-0" data-toggle="dropdown" id="topbar-userdrop" href="#" role="button" aria-haspopup="true"
										aria-expanded="false">
									<span className="account-user-avatar"> 
									<img src="../images/users/avatar-1.jpg" alt="user-image" className="rounded-circle"/>
									</span>
									<span>
									<span className="account-user-name">Dominic Keller</span>
									<span className="account-position">Founder</span>
									</span>
									</a>
									<div className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown" aria-labelledby="topbar-userdrop">
										
										<div className=" dropdown-header noti-title">
											<h6 className="text-overflow m-0">Welcome !</h6>
										</div>
									
										<a href="javascript:void(0);" className="dropdown-item notify-item">
										<i className="mdi mdi-account-circle mr-1"></i>
										<span>My Account</span>
										</a>
									
										<a href="javascript:void(0);" className="dropdown-item notify-item">
										<i className="mdi mdi-account-edit mr-1"></i>
										<span>Settings</span>
										</a>
										
										<a href="javascript:void(0);" className="dropdown-item notify-item">
										<i className="mdi mdi-lifebuoy mr-1"></i>
										<span>Support</span>
										</a>
									
										<a href="javascript:void(0);" className="dropdown-item notify-item">
										<i className="mdi mdi-lock-outline mr-1"></i>
										<span>Lock Screen</span>
										</a>
										
										<a href="javascript:void(0);" className="dropdown-item notify-item">
										<i className="mdi mdi-logout mr-1"></i>
										<span>Logout</span>
										</a>
									</div>
								</li>
							</ul>
							<a className="navbar-toggle"  data-toggle="collapse" data-target="#topnav-menu-content">
								<div className="lines">
									<span></span>
									<span></span>
									<span></span>
								</div>
							</a>
							<div className="app-search dropdown">
								<form>
									<div className="input-group">
										<input type="text" className="form-control" placeholder="Search..." id="top-search"/>
										<span className="mdi mdi-magnify search-icon"></span>
										<div className="input-group-append">
											<button className="btn btn-primary" type="submit">Search</button>
										</div>
									</div>
								</form>
								<div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
									
									<div className="dropdown-header noti-title">
										<h5 className="text-overflow mb-2">Found <span className="text-danger">17</span> results</h5>
									</div>
									
									<a href="javascript:void(0);" className="dropdown-item notify-item">
									<i className="uil-notes font-16 mr-1"></i>
									<span>Analytics Report</span>
									</a>
									
									<a href="javascript:void(0);" className="dropdown-item notify-item">
									<i className="uil-life-ring font-16 mr-1"></i>
									<span>How can I help you?</span>
									</a>
									
									<a href="javascript:void(0);" className="dropdown-item notify-item">
									<i className="uil-cog font-16 mr-1"></i>
									<span>User profile settings</span>
									</a>
									
									<div className="dropdown-header noti-title">
										<h6 className="text-overflow mb-2 text-uppercase">Users</h6>
									</div>
									<div className="notification-list">
										
										<a href="javascript:void(0);" className="dropdown-item notify-item">
											<div className="media">
												<img className="d-flex mr-2 rounded-circle" src="../images/users/avatar-2.jpg" alt="Generic placeholder image" height="32"/>
												<div className="media-body">
													<h5 className="m-0 font-14">Erwin Brown</h5>
													<span className="font-12 mb-0">UI Designer</span>
												</div>
											</div>
										</a>
										
										<a href="javascript:void(0);" className="dropdown-item notify-item">
											<div className="media">
												<img className="d-flex mr-2 rounded-circle" src="../images/users/avatar-5.jpg" alt="Generic placeholder image" height="32"/>
												<div className="media-body">
													<h5 className="m-0 font-14">Jacob Deo</h5>
													<span className="font-12 mb-0">Developer</span>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="topnav shadow-sm">
						<div className="container-fluid">
							<nav className="navbar navbar-light navbar-expand-lg topnav-menu">
								<div className="collapse navbar-collapse" id="topnav-menu-content">
									<ul className="navbar-nav">
										<li className="nav-item dropdown">
											<a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-dashboards" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<i className="uil-dashboard mr-1"></i>Dashboards 
												<div className="arrow-down"></div>
											</a>
											<div className="dropdown-menu" aria-labelledby="topnav-dashboards">
												<a href="dashboard-analytics.html" className="dropdown-item">Analytics</a>
												<a href="dashboard-crm.html" className="dropdown-item">CRM</a>
												<a href="index.html" className="dropdown-item">Ecommerce</a>
												<a href="dashboard-projects.html" className="dropdown-item">Projects</a>
											</div>
										</li>
										<li className="nav-item dropdown">
											<a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-apps" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<i className="uil-apps mr-1"></i>Apps 
												<div className="arrow-down"></div>
											</a>
											<div className="dropdown-menu" aria-labelledby="topnav-apps">
												<a href="apps-calendar.html" className="dropdown-item">Calendar</a>
												<a href="apps-chat.html" className="dropdown-item">Chat</a>
												<div className="dropdown">
													<a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-ecommerce" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														Ecommerce 
														<div className="arrow-down"></div>
													</a>
													<div className="dropdown-menu" aria-labelledby="topnav-ecommerce">
														<a href="apps-ecommerce-products.html" className="dropdown-item">Products</a>
														<a href="apps-ecommerce-products-details.html" className="dropdown-item">Products Details</a>
														<a href="apps-ecommerce-orders.html" className="dropdown-item">Orders</a>
														<a href="apps-ecommerce-orders-details.html" className="dropdown-item">Order Details</a>
														<a href="apps-ecommerce-customers.html" className="dropdown-item">Customers</a>
														<a href="apps-ecommerce-shopping-cart.html" className="dropdown-item">Shopping Cart</a>
														<a href="apps-ecommerce-checkout.html" className="dropdown-item">Checkout</a>
														<a href="apps-ecommerce-sellers.html" className="dropdown-item">Sellers</a>
													</div>
												</div>
												<div className="dropdown">
													<a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-email" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														Email 
														<div className="arrow-down"></div>
													</a>
													<div className="dropdown-menu" aria-labelledby="topnav-email">
														<a href="apps-email-inbox.html" className="dropdown-item">Inbox</a>
														<a href="apps-email-read.html" className="dropdown-item">Read Email</a>
													</div>
												</div>
												<div className="dropdown">
													<a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-project" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														Projects 
														<div className="arrow-down"></div>
													</a>
													<div className="dropdown-menu" aria-labelledby="topnav-project">
														<a href="apps-projects-list.html" className="dropdown-item">List</a>
														<a href="apps-projects-details.html" className="dropdown-item">Details</a>
														<a href="apps-projects-gantt.html" className="dropdown-item">Gantt</a>
														<a href="apps-projects-add.html" className="dropdown-item">Create Project</a>
													</div>
												</div>
												<a href="apps-social-feed.html" className="dropdown-item">Social Feed</a>
												<div className="dropdown">
													<a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-tasks" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														Tasks 
														<div className="arrow-down"></div>
													</a>
													<div className="dropdown-menu" aria-labelledby="topnav-tasks">
														<a href="apps-tasks.html" className="dropdown-item">List</a>
														<a href="apps-tasks-details.html" className="dropdown-item">Details</a>
														<a href="apps-kanban.html" className="dropdown-item">Kanban Board</a>
													</div>
												</div>
												<a href="apps-file-manager.html" className="dropdown-item">File Manager</a>
											</div>
										</li>
										<li className="nav-item dropdown">
											<a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<i className="uil-copy-alt mr-1"></i>Pages 
												<div className="arrow-down"></div>
											</a>
											<div className="dropdown-menu" aria-labelledby="topnav-pages">
												<div className="dropdown">
													<a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-auth" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														Authenitication 
														<div className="arrow-down"></div>
													</a>
													<div className="dropdown-menu" aria-labelledby="topnav-auth">
														<a href="pages-login.html" className="dropdown-item">Login</a>
														<a href="pages-login-2.html" className="dropdown-item">Login 2</a>
														<a href="pages-register.html" className="dropdown-item">Register</a>
														<a href="pages-register-2.html" className="dropdown-item">Register 2</a>
														<a href="pages-logout.html" className="dropdown-item">Logout</a>
														<a href="pages-logout-2.html" className="dropdown-item">Logout 2</a>
														<a href="pages-recoverpw.html" className="dropdown-item">Recover Password</a>
														<a href="pages-recoverpw-2.html" className="dropdown-item">Recover Password 2</a>
														<a href="pages-lock-screen.html" className="dropdown-item">Lock Screen</a>
														<a href="pages-lock-screen-2.html" className="dropdown-item">Lock Screen 2</a>
														<a href="pages-confirm-mail.html" className="dropdown-item">Confirm Mail</a>
														<a href="pages-confirm-mail-2.html" className="dropdown-item">Confirm Mail 2</a>
													</div>
												</div>
												<div className="dropdown">
													<a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-error" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														Error 
														<div className="arrow-down"></div>
													</a>
													<div className="dropdown-menu" aria-labelledby="topnav-error">
														<a href="pages-404.html" className="dropdown-item">Error 404</a>
														<a href="pages-404-alt.html" className="dropdown-item">Error 404-alt</a>
														<a href="pages-500.html" className="dropdown-item">Error 500</a>
													</div>
												</div>
												<a href="pages-starter.html" className="dropdown-item">Starter Page</a>
												<a href="pages-preloader.html" className="dropdown-item">With Preloader</a>
												<a href="pages-profile.html" className="dropdown-item">Profile</a>
												<a href="pages-profile-2.html" className="dropdown-item">Profile 2</a>
												<a href="pages-invoice.html" className="dropdown-item">Invoice</a>
												<a href="pages-faq.html" className="dropdown-item">FAQ</a>
												<a href="pages-pricing.html" className="dropdown-item">Pricing</a>
												<a href="pages-maintenance.html" className="dropdown-item">Maintenance</a>
												<a href="pages-timeline.html" className="dropdown-item">Timeline</a>
												<a href="landing.html" className="dropdown-item">Landing</a>
											</div>
										</li>
										<li className="nav-item dropdown">
											<a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<i className="uil-package mr-1"></i>Components 
												<div className="arrow-down"></div>
											</a>
											<div className="dropdown-menu" aria-labelledby="topnav-components">
												<a href="widgets.html" className="dropdown-item">Widgets</a>
												<div className="dropdown">
													<a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-ui-kit" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														Base UI 1 
														<div className="arrow-down"></div>
													</a>
													<div className="dropdown-menu" aria-labelledby="topnav-ui-kit">
														<a href="ui-accordions.html" className="dropdown-item">Accordions</a>
														<a href="ui-alerts.html" className="dropdown-item">Alerts</a>
														<a href="ui-avatars.html" className="dropdown-item">Avatars</a>
														<a href="ui-badges.html" className="dropdown-item">Badges</a>
														<a href="ui-breadcrumb.html" className="dropdown-item">Breadcrumb</a>
														<a href="ui-buttons.html" className="dropdown-item">Buttons</a>
														<a href="ui-cards.html" className="dropdown-item">Cards</a>
														<a href="ui-carousel.html" className="dropdown-item">Carousel</a>
														<a href="ui-dropdowns.html" className="dropdown-item">Dropdowns</a>
														<a href="ui-embed-video.html" className="dropdown-item">Embed Video</a>
														<a href="ui-grid.html" className="dropdown-item">Grid</a>
														<a href="ui-list-group.html" className="dropdown-item">List Group</a>
													</div>
												</div>
												<div className="dropdown">
													<a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-ui-kit2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														Base UI 2 
														<div className="arrow-down"></div>
													</a>
													<div className="dropdown-menu" aria-labelledby="topnav-ui-kit2">
														<a href="ui-media-object.html" className="dropdown-item">Media Object</a>
														<a href="ui-modals.html" className="dropdown-item">Modals</a>
														<a href="ui-notifications.html" className="dropdown-item">Notifications</a>
														<a href="ui-pagination.html" className="dropdown-item">Pagination</a>
														<a href="ui-popovers.html" className="dropdown-item">Popovers</a>
														<a href="ui-progress.html" className="dropdown-item">Progress</a>
														<a href="ui-ribbons.html" className="dropdown-item">Ribbons</a>
														<a href="ui-spinners.html" className="dropdown-item">Spinners</a>
														<a href="ui-tabs.html" className="dropdown-item">Tabs</a>
														<a href="ui-tooltips.html" className="dropdown-item">Tooltips</a>
														<a href="ui-typography.html" className="dropdown-item">Typography</a>
													</div>
												</div>
												<div className="dropdown">
													<a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-extended-ui" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														Extended UI 
														<div className="arrow-down"></div>
													</a>
													<div className="dropdown-menu" aria-labelledby="topnav-extended-ui">
														<a href="extended-dragula.html" className="dropdown-item">Dragula</a>
														<a href="extended-range-slider.html" className="dropdown-item">Range Slider</a>
														<a href="extended-ratings.html" className="dropdown-item">Ratings</a>
														<a href="extended-scrollbar.html" className="dropdown-item">Scrollbar</a>
														<a href="extended-scrollspy.html" className="dropdown-item">Scrollspy</a>
													</div>
												</div>
												<div className="dropdown">
													<a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-charts" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														Charts 
														<div className="arrow-down"></div>
													</a>
													<div className="dropdown-menu" aria-labelledby="topnav-charts">
														<div className="dropdown">
															<a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-apex-charts" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																Apex Charts 
																<div className="arrow-down"></div>
															</a>
															<div className="dropdown-menu" aria-labelledby="topnav-apex-charts">
																<a href="charts-apex-area.html" className="dropdown-item">Area</a>
																<a href="charts-apex-bar.html" className="dropdown-item">Bar</a>
																<a href="charts-apex-bubble.html" className="dropdown-item">Bubble</a>
																<a href="charts-apex-candlestick.html" className="dropdown-item">Candlestick</a>
																<a href="charts-apex-column.html" className="dropdown-item">Column</a>
																<a href="charts-apex-heatmap.html" className="dropdown-item">Heatmap</a>
																<a href="charts-apex-line.html" className="dropdown-item">Line</a>
																<a href="charts-apex-mixed.html" className="dropdown-item">Mixed</a>
																<a href="charts-apex-pie.html" className="dropdown-item">Pie</a>
																<a href="charts-apex-radar.html" className="dropdown-item">Radar</a>
																<a href="charts-apex-radialbar.html" className="dropdown-item">RadialBar</a>
																<a href="charts-apex-scatter.html" className="dropdown-item">Scatter</a>
																<a href="charts-apex-sparklines.html" className="dropdown-item">Sparklines</a>
															</div>
														</div>
														<a href="charts-chartjs.html" className="dropdown-item">Chartjs</a>
														<a href="charts-brite.html" className="dropdown-item">Britecharts</a>
														<a href="charts-sparkline.html" className="dropdown-item">Sparklines</a>
													</div>
												</div>
												<div className="dropdown">
													<a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-forms" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														Forms 
														<div className="arrow-down"></div>
													</a>
													<div className="dropdown-menu" aria-labelledby="topnav-forms">
														<a href="form-elements.html" className="dropdown-item">Basic Elements</a>
														<a href="form-advanced.html" className="dropdown-item">Form Advanced</a>
														<a href="form-validation.html" className="dropdown-item">Validation</a>
														<a href="form-wizard.html" className="dropdown-item">Wizard</a>
														<a href="form-fileuploads.html" className="dropdown-item">File Uploads</a>
														<a href="form-editors.html" className="dropdown-item">Editors</a>
													</div>
												</div>
												<div className="dropdown">
													<a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-tables" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														Tables 
														<div className="arrow-down"></div>
													</a>
													<div className="dropdown-menu" aria-labelledby="topnav-tables">
														<a href="tables-basic.html" className="dropdown-item">Basic Tables</a>
														<a href="tables-datatable.html" className="dropdown-item">Data Tables</a>
													</div>
												</div>
												<div className="dropdown">
													<a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-icons" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														Icons 
														<div className="arrow-down"></div>
													</a>
													<div className="dropdown-menu" aria-labelledby="topnav-icons">
														<a href="icons-dripicons.html" className="dropdown-item">Dripicons</a>
														<a href="icons-mdi.html" className="dropdown-item">Material Design</a>
														<a href="icons-unicons.html" className="dropdown-item">Unicons</a>
													</div>
												</div>
												<div className="dropdown">
													<a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-maps" role="button" data-toggle="dropdown" aria-expanded="false">
														Maps 
														<div className="arrow-down"></div>
													</a>
													<div className="dropdown-menu" aria-labelledby="topnav-maps">
														<a href="maps-google.html" className="dropdown-item">Google Maps</a>
														<a href="maps-vector.html" className="dropdown-item">Vector Maps</a>
													</div>
												</div>
											</div>
										</li>
										<li className="nav-item dropdown">
											<a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-layouts" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<i className="uil-window mr-1"></i>Layouts 
												<div className="arrow-down"></div>
											</a>
											<div className="dropdown-menu" aria-labelledby="topnav-layouts">
												<a href="layouts-vertical.html" className="dropdown-item">Vertical</a>
												<a href="layouts-detached.html" className="dropdown-item">Detached</a>
											</div>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
					
					<div className="container-fluid">
						
						<div className="row">
							<div className="col-12">
								<div className="page-title-box">
									<div className="page-title-right">
										<ol className="breadcrumb m-0">
											<li className="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
											<li className="breadcrumb-item"><a href="javascript: void(0);">Apps</a></li>
											<li className="breadcrumb-item active">Projects</li>
										</ol>
									</div>
									<h4 className="page-title">Projects</h4>
								</div>
							</div>
						</div>
						
						<div className="row mb-2">
							<div className="col-sm-4">
								<a href="apps-projects-add.html" className="btn btn-danger btn-rounded mb-3"><i className="mdi mdi-plus"></i> Create Project</a>
							</div>
							<div className="col-sm-8">
								<div className="text-sm-right">
									<div className="btn-group mb-3">
										<button type="button" className="btn btn-primary">All</button>
									</div>
									<div className="btn-group mb-3 ml-1">
										<button type="button" className="btn btn-light">Ongoing</button>
										<button type="button" className="btn btn-light">Finished</button>
									</div>
									<div className="btn-group mb-3 ml-2 d-none d-sm-inline-block">
										<button type="button" className="btn btn-secondary"><i className="dripicons-view-apps"></i></button>
									</div>
									<div className="btn-group mb-3 d-none d-sm-inline-block">
										<button type="button" className="btn btn-link text-muted"><i className="dripicons-checklist"></i></button>
									</div>
								</div>
							</div>
							
						</div>
						
						<div className="row">
							<div className="col-md-6 col-xl-3">
								
								<div className="card d-block">
									<div className="card-body">
										<div className="dropdown card-widgets">
											<a href="#" className="dropdown-toggle arrow-none" data-toggle="dropdown" aria-expanded="false">
											<i className="dripicons-dots-3"></i>
											</a>
											<div className="dropdown-menu dropdown-menu-right">
												
												<a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-pencil mr-1"></i>Edit</a>
												
												<a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-delete mr-1"></i>Delete</a>
												
												<a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-email-outline mr-1"></i>Invite</a>
												
												<a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-exit-to-app mr-1"></i>Leave</a>
											</div>
										</div>
										
										<h4 className="mt-0">
											<a href="apps-projects-details.html" className="text-title">App design and development</a>
										</h4>
										<div className="badge badge-success mb-3">Finished</div>
										<p className="text-muted font-13 mb-3">With supporting text below as a natural lead-in to additional contenposuere erat a ante...<a href="javascript:void(0);" className="font-weight-bold text-muted">view more</a>
										</p>
										
										<p className="mb-1">
											<span className="pr-2 text-nowrap mb-2 d-inline-block">
											<i className="mdi mdi-format-list-bulleted-type text-muted"></i>
											<b>21</b> Tasks
											</span>
											<span className="text-nowrap mb-2 d-inline-block">
											<i className="mdi mdi-comment-multiple-outline text-muted"></i>
											<b>741</b> Comments
											</span>
										</p>
										<div>
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme" className="d-inline-block">
											<img src="../images/users/avatar-6.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Michael Zenaty" className="d-inline-block">
											<img src="../images/users/avatar-7.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="James Anderson" className="d-inline-block">
											<img src="../images/users/avatar-8.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
											<a href="javascript:void(0);" className="d-inline-block text-muted font-weight-bold ml-2">
											+7 more
											</a>
										</div>
									</div>
									
									<ul className="list-group list-group-flush">
										<li className="list-group-item p-3">
											
											<p className="mb-2 font-weight-bold">Progress <span className="float-right">100%</span></p>
											<div className="progress progress-sm">
												<div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{"width": "100%"}}>
												</div>
												
											</div>
											
										</li>
									</ul>
								</div>
								
							</div>
							
							<div className="col-md-6 col-xl-3">
								
								<div className="card d-block">
									<div className="card-body">
										<div className="dropdown card-widgets">
											<a href="#" className="dropdown-toggle arrow-none" data-toggle="dropdown" aria-expanded="false">
											<i className="dripicons-dots-3"></i>
											</a>
											<div className="dropdown-menu dropdown-menu-right">
											
												<a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-pencil mr-1"></i>Edit</a>
												
												<a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-delete mr-1"></i>Delete</a>
												
												<a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-email-outline mr-1"></i>Invite</a>
												
												<a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-exit-to-app mr-1"></i>Leave</a>
											</div>
										</div>
										
										<h4 className="mt-0">
											<a href="apps-projects-details.html" className="text-title">Coffee detail page - Main Page</a>
										</h4>
										<div className="badge badge-secondary mb-3">Ongoing</div>
										<p className="text-muted font-13 mb-3">This card has supporting text below as a natural lead-in to additional content is a little bit longer...<a href="javascript:void(0);" className="font-weight-bold text-muted">view more</a>
										</p>
										
										<p className="mb-1">
											<span className="pr-2 text-nowrap mb-2 d-inline-block">
											<i className="mdi mdi-format-list-bulleted-type text-muted"></i>
											<b>81</b> Tasks
											</span>
											<span className="text-nowrap mb-2 d-inline-block">
											<i className="mdi mdi-comment-multiple-outline text-muted"></i>
											<b>103</b> Comments
											</span>
										</p>
										<div>
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme" className="d-inline-block">
											<img src="../images/users/avatar-1.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Michael Zenaty" className="d-inline-block">
											<img src="../images/users/avatar-2.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="James Anderson" className="d-inline-block">
											<img src="../images/users/avatar-3.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
											<a href="javascript:void(0);" className="d-inline-block text-muted font-weight-bold ml-2">
											+3 more
											</a>
										</div>
									</div>
									
									<ul className="list-group list-group-flush">
										<li className="list-group-item p-3">
											
											<p className="mb-2 font-weight-bold">Progress <span className="float-right">28%</span></p>
											<div className="progress progress-sm">
												<div className="progress-bar" role="progressbar" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100" style={{"width": "28%"}}>
												</div>
												
											</div>
											
										</li>
									</ul>
								</div>
								
							</div>
							
							<div className="col-md-6 col-xl-3">
								
								<div className="card d-block">
									<div className="card-body">
										<div className="dropdown card-widgets">
											<a href="#" className="dropdown-toggle arrow-none" data-toggle="dropdown" aria-expanded="false">
											<i className="dripicons-dots-3"></i>
											</a>
											<div className="dropdown-menu dropdown-menu-right">
												
												<a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-pencil mr-1"></i>Edit</a>
												
												<a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-delete mr-1"></i>Delete</a>
												
												<a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-email-outline mr-1"></i>Invite</a>
												
												<a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-exit-to-app mr-1"></i>Leave</a>
											</div>
										</div>
										
										<h4 className="mt-0">
											<a href="apps-projects-details.html" className="text-title">Poster illustation design</a>
										</h4>
										<div className="badge badge-secondary mb-3">Ongoing</div>
										<p className="text-muted font-13 mb-3">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...<a href="javascript:void(0);" className="font-weight-bold text-muted">view more</a>
										</p>
										
										<p className="mb-1">
											<span className="pr-2 text-nowrap mb-2 d-inline-block">
											<i className="mdi mdi-format-list-bulleted-type text-muted"></i>
											<b>12</b> Tasks
											</span>
											<span className="text-nowrap mb-2 d-inline-block">
											<i className="mdi mdi-comment-multiple-outline text-muted"></i>
											<b>482</b> Comments
											</span>
										</p>
										<div>
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme" className="d-inline-block">
											<img src="../images/users/avatar-4.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Michael Zenaty" className="d-inline-block">
											<img src="../images/users/avatar-5.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
										</div>
									</div>
									
									<ul className="list-group list-group-flush">
										<li className="list-group-item p-3">
											
											<p className="mb-2 font-weight-bold">Progress <span className="float-right">63%</span></p>
											<div className="progress progress-sm">
												<div className="progress-bar" role="progressbar" aria-valuenow="63" aria-valuemin="0" aria-valuemax="100" style={{"width": "63%"}}>
												</div>
												
											</div>
											
										</li>
									</ul>
								</div>
								
							</div>
							
							<div className="col-md-6 col-xl-3">
								
								<div className="card d-block">
									<div className="card-body">
										<div className="dropdown card-widgets">
											<a href="#" className="dropdown-toggle arrow-none" data-toggle="dropdown" aria-expanded="false">
											<i className="dripicons-dots-3"></i>
											</a>
											<div className="dropdown-menu dropdown-menu-right">
												
												<a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-pencil mr-1"></i>Edit</a>
												
												<a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-delete mr-1"></i>Delete</a>
												
												<a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-email-outline mr-1"></i>Invite</a>
												
												<a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-exit-to-app mr-1"></i>Leave</a>
											</div>
										</div>
										
										<h4 className="mt-0">
											<a href="apps-projects-details.html" className="text-title">Drinking bottle graphics </a>
										</h4>
										<div className="badge badge-success mb-3">Finished</div>
										<p className="text-muted font-13 mb-3">Some quick example text to build on the card title and make up the bulk of the card's content...<a href="javascript:void(0);" className="font-weight-bold text-muted">view more</a>
										</p>
										
										<p className="mb-1">
											<span className="pr-2 mb-2 d-inline-block text-nowrap">
											<i className="mdi mdi-format-list-bulleted-type text-muted"></i>
											<b>50</b> Tasks
											</span>
											<span className="text-nowrap mb-2 d-inline-block">
											<i className="mdi mdi-comment-multiple-outline text-muted"></i>
											<b>208</b> Comments
											</span>
										</p>
										<div>
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme" className="d-inline-block">
											<img src="../images/users/avatar-10.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Michael Zenaty" className="d-inline-block">
											<img src="../images/users/avatar-5.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="James Anderson" className="d-inline-block">
											<img src="../images/users/avatar-6.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
											<a href="javascript:void(0);" className="d-inline-block text-muted font-weight-bold ml-2">
											+2 more
											</a>
										</div>
									</div>
									
									<ul className="list-group list-group-flush">
										<li className="list-group-item p-3">
											
											<p className="mb-2 font-weight-bold">Progress <span className="float-right">100%</span></p>
											<div className="progress progress-sm">
												<div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{"width": "100%"}}>
												</div>
												
											</div>
											
										</li>
									</ul>
								</div>
								
							</div>
							
						</div>
						
						<div className="row">
							<div className="col-md-6 col-xl-3">
								
								<div className="card d-block">
									
									<img className="card-img-top" src="../images/projects/project-1.jpg" alt="project image cap"/>
									<div className="card-img-overlay">
										<div className="badge badge-secondary p-1">Ongoing</div>
									</div>
									<div className="card-body position-relative">
										
										<h4 className="mt-0">
											<a href="apps-projects-details.html" className="text-title">Company logo design</a>
										</h4>
										
										<p className="mb-3">
											<span className="pr-2 text-nowrap">
											<i className="mdi mdi-format-list-bulleted-type"></i>
											<b>3</b> Tasks
											</span>
											<span className="text-nowrap">
											<i className="mdi mdi-comment-multiple-outline"></i>
											<b>104</b> Comments
											</span>
										</p>
										<div className="mb-3">
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme" className="d-inline-block">
											<img src="../images/users/avatar-3.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Michael Zenaty" className="d-inline-block">
											<img src="../images/users/avatar-5.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="James Anderson" className="d-inline-block">
											<img src="../images/users/avatar-9.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
										</div>
										
										<p className="mb-2 font-weight-bold">Progress <span className="float-right">45%</span></p>
										<div className="progress progress-sm">
											<div className="progress-bar" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{"width": "45%"}}>
											</div>
											
										</div>
										
									</div>
									
								</div>
								
							</div>
							
							<div className="col-md-6 col-xl-3">
								
								<div className="card d-block">
									
									<img className="card-img-top" src="../images/projects/project-2.jpg" alt="project image cap"/>
									<div className="card-img-overlay">
										<div className="badge badge-success p-1">Finished</div>
									</div>
									<div className="card-body position-relative">
										
										<h4 className="mt-0">
											<a href="apps-projects-details.html" className="text-title">Landing page design - Home</a>
										</h4>
										
										<p className="mb-3">
											<span className="pr-2 text-nowrap">
											<i className="mdi mdi-format-list-bulleted-type"></i>
											<b>11</b> Tasks
											</span>
											<span className="text-nowrap">
											<i className="mdi mdi-comment-multiple-outline"></i>
											<b>254</b> Comments
											</span>
										</p>
										<div className="mb-3">
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme" className="d-inline-block">
											<img src="../images/users/avatar-10.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Michael Zenaty" className="d-inline-block">
											<img src="../images/users/avatar-5.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="James Anderson" className="d-inline-block">
											<img src="../images/users/avatar-7.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
											<a href="javascript:void(0);" className="d-inline-block text-muted font-weight-bold ml-2">
											+2 more
											</a>
										</div>
										
										<p className="mb-2 font-weight-bold">Progress <span className="float-right">100%</span></p>
										<div className="progress progress-sm">
											<div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{"width": "100%"}}>
											</div>
											
										</div>
										
									</div>
									
								</div>
								
							</div>
							
							<div className="col-md-6 col-xl-3">
								
								<div className="card d-block">
									
									<img className="card-img-top" src="../images/projects/project-3.jpg" alt="project image cap"/>
									<div className="card-img-overlay">
										<div className="badge badge-secondary p-1">Ongoing</div>
									</div>
									<div className="card-body position-relative">
										
										<h4 className="mt-0">
											<a href="apps-projects-details.html" className="text-title">Product page redesign</a>
										</h4>
										
										<p className="mb-3">
											<span className="pr-2 text-nowrap">
											<i className="mdi mdi-format-list-bulleted-type"></i>
											<b>21</b> Tasks
											</span>
											<span className="text-nowrap">
											<i className="mdi mdi-comment-multiple-outline"></i>
											<b>668</b> Comments
											</span>
										</p>
										<div className="mb-3">
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme" className="d-inline-block">
											<img src="../images/users/avatar-6.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Michael Zenaty" className="d-inline-block">
											<img src="../images/users/avatar-7.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="James Anderson" className="d-inline-block">
											<img src="../images/users/avatar-8.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
											<a href="javascript:void(0);" className="d-inline-block text-muted font-weight-bold ml-2">
											+5 more
											</a>
										</div>
										
										<p className="mb-2 font-weight-bold">Progress <span className="float-right">71%</span></p>
										<div className="progress progress-sm">
											<div className="progress-bar" role="progressbar" aria-valuenow="71" aria-valuemin="0" aria-valuemax="100" style={{"width": "71%"}}>
											</div>
											
										</div>
										
									</div>
									
								</div>
								
							</div>
							
							<div className="col-md-6 col-xl-3">
								
								<div className="card d-block">
									
									<img className="card-img-top" src="../images/projects/project-4.jpg" alt="project image cap"/>
									<div className="card-img-overlay">
										<div className="badge badge-secondary p-1">Ongoing</div>
									</div>
									<div className="card-body position-relative">
										
										<h4 className="mt-0">
											<a href="apps-projects-details.html" className="text-title">Coffee detail page - Main Page</a>
										</h4>
										
										<p className="mb-3">
											<span className="pr-2 text-nowrap">
											<i className="mdi mdi-format-list-bulleted-type"></i>
											<b>18</b> Tasks
											</span>
											<span className="text-nowrap">
											<i className="mdi mdi-comment-multiple-outline"></i>
											<b>259</b> Comments
											</span>
										</p>
										<div className="mb-3">
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme" className="d-inline-block">
											<img src="../images/users/avatar-2.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
											<a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Michael Zenaty" className="d-inline-block">
											<img src="../images/users/avatar-3.jpg" className="rounded-circle avatar-xs" alt="friend"/>
											</a>
										</div>
										
										<p className="mb-2 font-weight-bold">Progress <span className="float-right">52%</span></p>
										<div className="progress progress-sm">
											<div className="progress-bar" role="progressbar" aria-valuenow="52" aria-valuemin="0" aria-valuemax="100" style={{"width": "52%"}}>
											</div>
											
										</div>
										
									</div>
									
								</div>
								
							</div>
							
						</div>
						
					</div>
					
				</div>
				
				<footer className="footer">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-6">
								<script>document.write(new Date().getFullYear())</script> © Hyper - Coderthemes.com
							</div>
							<div className="col-md-6">
								<div className="text-md-right footer-links d-none d-md-block">
									<a href="javascript: void(0);">About</a>
									<a href="javascript: void(0);">Support</a>
									<a href="javascript: void(0);">Contact Us</a>
								</div>
							</div>
						</div>
					</div>
				</footer>
				
			</div>
			
		</div>
		
		<div className="right-bar">
			<div className="rightbar-title">
				<a href="javascript:void(0);" className="right-bar-toggle float-right">
				<i className="dripicons-cross noti-icon"></i>
				</a>
				<h5 className="m-0">Settings</h5>
			</div>
			<div className="rightbar-content h-100" data-simplebar>
				<div className="p-3">
					<div className="alert alert-warning" role="alert">
						<strong>Customize </strong> the overall color scheme, layout width, etc.
					</div>
					
					<h5 className="mt-3">Color Scheme</h5>
					<hr className="mt-1" />
					<div className="custom-control custom-switch mb-1">
						<input type="radio" className="custom-control-input" name="color-scheme-mode" value="light" id="light-mode-check"
							checked />
						<label className="custom-control-label" for="light-mode-check">Light Mode</label>
					</div>
					<div className="custom-control custom-switch mb-1">
						<input type="radio" className="custom-control-input" name="color-scheme-mode" value="dark" id="dark-mode-check" />
						<label className="custom-control-label" for="dark-mode-check">Dark Mode</label>
					</div>
					
					<h5 className="mt-4">Width</h5>
					<hr className="mt-1"/>
					<div className="custom-control custom-switch mb-1">
						<input type="radio" className="custom-control-input" name="width" value="fluid" id="fluid-check" checked />
						<label className="custom-control-label" for="fluid-check">Fluid</label>
					</div>
					<div className="custom-control custom-switch mb-1">
						<input type="radio" className="custom-control-input" name="width" value="boxed" id="boxed-check" />
						<label className="custom-control-label" for="boxed-check">Boxed</label>
					</div>
					<button className="btn btn-primary btn-block mt-4" id="resetBtn">Reset to Default</button>
					<a href="https://themes.getbootstrap.com/product/hyper-responsive-admin-dashboard-template/" className="btn btn-danger btn-block mt-3" target="_blank"><i className="mdi mdi-basket mr-1"></i> Purchase Now</a>
				</div>
				
			</div>
		</div>
		<div className="rightbar-overlay"></div>
	</>
    );
  }
}
