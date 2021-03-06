import "./style.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";


export default class Dashboard extends Component {
  render() {
	  //console.log(location.pathname);
    return (
	<>
	<div className="wrapper">
		<div className="left-side-menu">
			<a href="index.html" className="logo text-center logo-light">
			<span className="logo-lg">
			<img src="../images/logo.png" alt="" height="16"/>
			</span>
			<span className="logo-sm">
			<img src="../images/logo_sm.png" alt="" height="16"/>
			</span>
			</a>
			<a href="index.html" className="logo text-center logo-dark">
			<span className="logo-lg">
			<img src="../images/logo-dark.png" alt="" height="16"/>
			</span>
			<span className="logo-sm">
			<img src="../images/logo_sm_dark.png" alt="" height="16"/>
			</span>
			</a>
			<div className="h-100" id="left-side-menu-container" data-simplebar>
				<ul className="metismenu side-nav">
					<li className="side-nav-title side-nav-item">Navigation</li>
					<li className="side-nav-item">
						<a href="javascript: void(0);" className="side-nav-link">
						<i className="uil-home-alt"></i>
						<span className="badge badge-success float-right">4</span>
						<span> Dashboards </span>
						</a>
						<ul className="side-nav-second-level" aria-expanded="false">
							<li>
								<a href="dashboard-analytics.html">Analytics</a>
							</li>
							<li>
								<a href="dashboard-crm.html">CRM</a>
							</li>
							<li>
								<a href="index.html">Ecommerce</a>
							</li>
							<li>
								<a href="dashboard-projects.html">Projects</a>
							</li>
						</ul>
					</li>
					<li className="side-nav-title side-nav-item">Apps</li>
					<li className="side-nav-item">
						<a href="apps-calendar.html" className="side-nav-link">
						<i className="uil-calender"></i>
						<span> Calendar </span>
						</a>
					</li>
					<li className="side-nav-item">
						<a href="apps-chat.html" className="side-nav-link">
						<i className="uil-comments-alt"></i>
						<span> Chat </span>
						</a>
					</li>
					<li className="side-nav-item">
						<a href="javascript: void(0);" className="side-nav-link">
						<i className="uil-store"></i>
						<span> Ecommerce </span>
						<span className="menu-arrow"></span>
						</a>
						<ul className="side-nav-second-level" aria-expanded="false">
							<li>
								<a href="apps-ecommerce-products.html">Products</a>
							</li>
							<li>
								<a href="apps-ecommerce-products-details.html">Products Details</a>
							</li>
							<li>
								<a href="apps-ecommerce-orders.html">Orders</a>
							</li>
							<li>
								<a href="apps-ecommerce-orders-details.html">Order Details</a>
							</li>
							<li>
								<a href="apps-ecommerce-customers.html">Customers</a>
							</li>
							<li>
								<a href="apps-ecommerce-shopping-cart.html">Shopping Cart</a>
							</li>
							<li>
								<a href="apps-ecommerce-checkout.html">Checkout</a>
							</li>
							<li>
								<a href="apps-ecommerce-sellers.html">Sellers</a>
							</li>
						</ul>
					</li>
					<li className="side-nav-item">
						<a href="javascript: void(0);" className="side-nav-link">
						<i className="uil-envelope"></i>
						<span> Email </span>
						<span className="menu-arrow"></span>
						</a>
						<ul className="side-nav-second-level" aria-expanded="false">
							<li>
								<a href="apps-email-inbox.html">Inbox</a>
							</li>
							<li>
								<a href="apps-email-read.html">Read Email</a>
							</li>
						</ul>
					</li>
					<li className="side-nav-item">
						<a href="javascript: void(0);" className="side-nav-link">
						<i className="uil-briefcase"></i>
						<span> Projects </span>
						<span className="menu-arrow"></span>
						</a>
						<ul className="side-nav-second-level" aria-expanded="false">
							<li>
								<a href="apps-projects-list.html">List</a>
							</li>
							<li>
								<a href="apps-projects-details.html">Details</a>
							</li>
							<li>
								<a href="apps-projects-gantt.html">Gantt <span className="badge badge-pill badge-light-lighten font-10 float-right">New</span></a>
							</li>
							<li>
								<a href="apps-projects-add.html">Create Project <span className="badge badge-pill badge-success-lighten font-10 float-right">New</span></a>
							</li>
						</ul>
					</li>
					<li className="side-nav-item">
						<a href="apps-social-feed.html" className="side-nav-link">
						<i className="uil-rss"></i>
						<span> Social Feed </span>
						</a>
					</li>
					<li className="side-nav-item">
						<a href="javascript: void(0);" className="side-nav-link">
						<i className="uil-clipboard-alt"></i>
						<span> Tasks </span>
						<span className="menu-arrow"></span>
						</a>
						<ul className="side-nav-second-level" aria-expanded="false">
							<li>
								<a href="apps-tasks.html">List</a>
							</li>
							<li>
								<a href="apps-tasks-details.html">Details</a>
							</li>
							<li>
								<a href="apps-kanban.html">Kanban Board</a>
							</li>
						</ul>
					</li>
					<li className="side-nav-item">
						<a href="apps-file-manager.html" className="side-nav-link">
						<i className="uil-folder-plus"></i>
						<span> File Manager </span>
						</a>
					</li>
					<li className="side-nav-title side-nav-item">Custom</li>
					<li className="side-nav-item">
						<a href="javascript: void(0);" className="side-nav-link">
						<i className="uil-copy-alt"></i>
						<span> Pages </span>
						<span className="menu-arrow"></span>
						</a>
						<ul className="side-nav-second-level" aria-expanded="false">
							<li>
								<a href="pages-profile.html">Profile</a>
							</li>
							<li>
								<a href="pages-profile-2.html">Profile 2</a>
							</li>
							<li>
								<a href="pages-invoice.html">Invoice</a>
							</li>
							<li>
								<a href="pages-faq.html">FAQ</a>
							</li>
							<li>
								<a href="pages-pricing.html">Pricing</a>
							</li>
							<li>
								<a href="pages-maintenance.html">Maintenance</a>
							</li>
							<li className="side-nav-item">
								<a href="javascript: void(0);" aria-expanded="false">Authentication
								<span className="menu-arrow"></span>
								</a>
								<ul className="side-nav-third-level" aria-expanded="false">
									<li>
										<a href="pages-login.html">Login</a>
									</li>
									<li>
										<a href="pages-login-2.html">Login 2</a>
									</li>
									<li>
										<a href="pages-register.html">Register</a>
									</li>
									<li>
										<a href="pages-register-2.html">Register 2</a>
									</li>
									<li>
										<a href="pages-logout.html">Logout</a>
									</li>
									<li>
										<a href="pages-logout-2.html">Logout 2</a>
									</li>
									<li>
										<a href="pages-recoverpw.html">Recover Password</a>
									</li>
									<li>
										<a href="pages-recoverpw-2.html">Recover Password 2</a>
									</li>
									<li>
										<a href="pages-lock-screen.html">Lock Screen</a>
									</li>
									<li>
										<a href="pages-lock-screen-2.html">Lock Screen 2</a>
									</li>
									<li>
										<a href="pages-confirm-mail.html">Confirm Mail</a>
									</li>
									<li>
										<a href="pages-confirm-mail-2.html">Confirm Mail 2</a>
									</li>
								</ul>
							</li>
							<li className="side-nav-item">
								<a href="javascript: void(0);" aria-expanded="false">Error
								<span className="menu-arrow"></span>
								</a>
								<ul className="side-nav-third-level" aria-expanded="false">
									<li>
										<a href="pages-404.html">Error 404</a>
									</li>
									<li>
										<a href="pages-404-alt.html">Error 404-alt</a>
									</li>
									<li>
										<a href="pages-500.html">Error 500</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="pages-starter.html">Starter Page</a>
							</li>
							<li>
								<a href="pages-preloader.html">With Preloader</a>
							</li>
							<li>
								<a href="pages-timeline.html">Timeline</a>
							</li>
						</ul>
					</li>
					<li className="side-nav-item">
						<a href="landing.html" target="_blank" className="side-nav-link">
						<i className="uil-globe"></i>
						<span className="badge badge-light float-right">New</span>
						<span> Landing </span>
						</a>
					</li>
					<li className="side-nav-item">
						<a href="javascript: void(0);" className="side-nav-link">
						<i className="uil-window"></i>
						<span> Layouts </span>
						<span className="menu-arrow"></span>
						</a>
						<ul className="side-nav-second-level" aria-expanded="false">
							<li>
								<a href="index.html">Horizontal</a>
							</li>
							<li>
								<a href="layouts-vertical.html">Vertical</a>
							</li>
							<li>
								<a href="layouts-detached.html">Detached</a>
							</li>
						</ul>
					</li>
					<li className="side-nav-title side-nav-item mt-1">Components</li>
					<li className="side-nav-item">
						<a href="javascript: void(0);" className="side-nav-link">
						<i className="uil-box"></i>
						<span> Base UI </span>
						<span className="menu-arrow"></span>
						</a>
						<ul className="side-nav-second-level" aria-expanded="false">
							<li>
								<a href="ui-accordions.html">Accordions</a>
							</li>
							<li>
								<a href="ui-alerts.html">Alerts</a>
							</li>
							<li>
								<a href="ui-avatars.html">Avatars</a>
							</li>
							<li>
								<a href="ui-badges.html">Badges</a>
							</li>
							<li>
								<a href="ui-breadcrumb.html">Breadcrumb</a>
							</li>
							<li>
								<a href="ui-buttons.html">Buttons</a>
							</li>
							<li>
								<a href="ui-cards.html">Cards</a>
							</li>
							<li>
								<a href="ui-carousel.html">Carousel</a>
							</li>
							<li>
								<a href="ui-dropdowns.html">Dropdowns</a>
							</li>
							<li>
								<a href="ui-embed-video.html">Embed Video</a>
							</li>
							<li>
								<a href="ui-grid.html">Grid</a>
							</li>
							<li>
								<a href="ui-list-group.html">List Group</a>
							</li>
							<li>
								<a href="ui-media-object.html">Media Object</a>
							</li>
							<li>
								<a href="ui-modals.html">Modals</a>
							</li>
							<li>
								<a href="ui-notifications.html">Notifications</a>
							</li>
							<li>
								<a href="ui-pagination.html">Pagination</a>
							</li>
							<li>
								<a href="ui-popovers.html">Popovers</a>
							</li>
							<li>
								<a href="ui-progress.html">Progress</a>
							</li>
							<li>
								<a href="ui-ribbons.html">Ribbons</a>
							</li>
							<li>
								<a href="ui-spinners.html">Spinners</a>
							</li>
							<li>
								<a href="ui-tabs.html">Tabs</a>
							</li>
							<li>
								<a href="ui-tooltips.html">Tooltips</a>
							</li>
							<li>
								<a href="ui-typography.html">Typography</a>
							</li>
						</ul>
					</li>
					<li className="side-nav-item">
						<a href="javascript: void(0);" className="side-nav-link">
						<i className="uil-package"></i>
						<span> Extended UI </span>
						<span className="menu-arrow"></span>
						</a>
						<ul className="side-nav-second-level" aria-expanded="false">
							<li>
								<a href="extended-dragula.html">Dragula</a>
							</li>
							<li>
								<a href="extended-range-slider.html">Range Slider</a>
							</li>
							<li>
								<a href="extended-ratings.html">Ratings</a>
							</li>
							<li>
								<a href="extended-scrollbar.html">Scrollbar</a>
							</li>
							<li>
								<a href="extended-scrollspy.html">Scrollspy</a>
							</li>
						</ul>
					</li>
					<li className="side-nav-item">
						<a href="widgets.html" className="side-nav-link">
						<i className="uil-layer-group"></i>
						<span> Widgets </span>
						</a>
					</li>
					<li className="side-nav-item">
						<a href="javascript: void(0);" className="side-nav-link">
						<i className="uil-streering"></i>
						<span> Icons </span>
						<span className="menu-arrow"></span>
						</a>
						<ul className="side-nav-second-level" aria-expanded="false">
							<li>
								<a href="icons-dripicons.html">Dripicons</a>
							</li>
							<li>
								<a href="icons-mdi.html">Material Design</a>
							</li>
							<li>
								<a href="icons-unicons.html">Unicons</a>
							</li>
						</ul>
					</li>
					<li className="side-nav-item">
						<a href="javascript: void(0);" className="side-nav-link">
						<i className="uil-document-layout-center"></i>
						<span> Forms </span>
						<span className="menu-arrow"></span>
						</a>
						<ul className="side-nav-second-level" aria-expanded="false">
							<li>
								<a href="form-elements.html">Basic Elements</a>
							</li>
							<li>
								<a href="form-advanced.html">Form Advanced</a>
							</li>
							<li>
								<a href="form-validation.html">Validation</a>
							</li>
							<li>
								<a href="form-wizard.html">Wizard</a>
							</li>
							<li>
								<a href="form-fileuploads.html">File Uploads</a>
							</li>
							<li>
								<a href="form-editors.html">Editors</a>
							</li>
						</ul>
					</li>
					<li className="side-nav-item">
						<a href="javascript: void(0);" className="side-nav-link">
						<i className="uil-chart"></i>
						<span> Charts </span>
						<span className="menu-arrow"></span>
						</a>
						<ul className="side-nav-second-level" aria-expanded="false">
							<li className="side-nav-item">
								<a href="javascript: void(0);" aria-expanded="false">Apex Charts
								<span className="menu-arrow"></span>
								</a>
								<ul className="side-nav-third-level" aria-expanded="false">
									<li>
										<a href="charts-apex-area.html">Area</a>
									</li>
									<li>
										<a href="charts-apex-bar.html">Bar</a>
									</li>
									<li>
										<a href="charts-apex-bubble.html">Bubble</a>
									</li>
									<li>
										<a href="charts-apex-candlestick.html">Candlestick</a>
									</li>
									<li>
										<a href="charts-apex-column.html">Column</a>
									</li>
									<li>
										<a href="charts-apex-heatmap.html">Heatmap</a>
									</li>
									<li>
										<a href="charts-apex-line.html">Line</a>
									</li>
									<li>
										<a href="charts-apex-mixed.html">Mixed</a>
									</li>
									<li>
										<a href="charts-apex-pie.html">Pie</a>
									</li>
									<li>
										<a href="charts-apex-radar.html">Radar</a>
									</li>
									<li>
										<a href="charts-apex-radialbar.html">RadialBar</a>
									</li>
									<li>
										<a href="charts-apex-scatter.html">Scatter</a>
									</li>
									<li>
										<a href="charts-apex-sparklines.html">Sparklines</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="charts-brite.html">Britecharts</a>
							</li>
							<li>
								<a href="charts-chartjs.html">Chartjs</a>
							</li>
							<li>
								<a href="charts-sparkline.html">Sparklines</a>
							</li>
						</ul>
					</li>
					<li className="side-nav-item">
						<a href="javascript: void(0);" className="side-nav-link">
						<i className="uil-table"></i>
						<span> Tables </span>
						<span className="menu-arrow"></span>
						</a>
						<ul className="side-nav-second-level" aria-expanded="false">
							<li>
								<a href="tables-basic.html">Basic Tables</a>
							</li>
							<li>
								<a href="tables-datatable.html">Data Tables</a>
							</li>
						</ul>
					</li>
					<li className="side-nav-item">
						<a href="javascript: void(0);" className="side-nav-link">
						<i className="uil-location-point"></i>
						<span> Maps </span>
						<span className="menu-arrow"></span>
						</a>
						<ul className="side-nav-second-level" aria-expanded="false">
							<li>
								<a href="maps-google.html">Google Maps</a>
							</li>
							<li>
								<a href="maps-vector.html">Vector Maps</a>
							</li>
						</ul>
					</li>
					<li className="side-nav-item">
						<a href="javascript: void(0);" className="side-nav-link">
						<i className="uil-folder-plus"></i>
						<span> Multi Level </span>
						<span className="menu-arrow"></span>
						</a>
						<ul className="side-nav-second-level" aria-expanded="false">
							<li className="side-nav-item">
								<a href="javascript: void(0);" aria-expanded="false">Second Level
								<span className="menu-arrow"></span>
								</a>
								<ul className="side-nav-third-level" aria-expanded="false">
									<li>
										<a href="javascript: void(0);">Item 1</a>
									</li>
									<li>
										<a href="javascript: void(0);">Item 2</a>
									</li>
								</ul>
							</li>
							<li className="side-nav-item">
								<a href="javascript: void(0);" aria-expanded="false">Third Level
								<span className="menu-arrow"></span>
								</a>
								<ul className="side-nav-third-level" aria-expanded="false">
									<li>
										<a href="javascript: void(0);">Item 1</a>
									</li>
									<li className="side-nav-item">
										<a href="javascript: void(0);" aria-expanded="false">Item 2
										<span className="menu-arrow"></span>
										</a>
										<ul className="side-nav-forth-level" aria-expanded="false">
											<li>
												<a href="javascript: void(0);">Item 2.1</a>
											</li>
											<li>
												<a href="javascript: void(0);">Item 2.2</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
				<div className="help-box text-white text-center">
					<a href="javascript: void(0);" className="float-right close-btn text-white">
					<i className="mdi mdi-close"></i>
					</a>
					<img src="../images/help-icon.svg" height="90" alt="Helper Icon Image" />
					<h5 className="mt-3">Unlimited Access</h5>
					<p className="mb-3">Upgrade to plan to get access to unlimited reports</p>
					<a href="javascript: void(0);" className="btn btn-outline-light btn-sm">Upgrade</a>
				</div>
				<div className="clearfix"></div>
			</div>
		</div>
		<div className="content-page">
			<div className="content">
				<div className="navbar-custom">
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
						<li className="dropdown notification-list topbar-dropdown">
							<a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
							<img src="../images/flags/us.jpg" alt="user-image" className="mr-0 mr-sm-1" height="12"/> 
							<span className="align-middle d-none d-sm-inline-block">English</span> <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle"></i>
							</a>
							<div className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu">
	
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
							<a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
							<i className="dripicons-bell noti-icon"></i>
							<span className="noti-icon-badge"></span>
							</a>
							<div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg">
						
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
							<a className="nav-link dropdown-toggle nav-user arrow-none mr-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="false"
								aria-expanded="false">
							<span className="account-user-avatar"> 
							<img src="../images/users/avatar-1.jpg" alt="user-image" className="rounded-circle"/>
							</span>
							<span>
							<span className="account-user-name">Dominic Keller</span>
							<span className="account-position">Founder</span>
							</span>
							</a>
							<div className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
		
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
					<button className="button-menu-mobile open-left disable-btn">
					<i className="mdi mdi-menu"></i>
					</button>
					<div className="app-search dropdown d-none d-lg-block">
						<form>
							<div className="input-group">
								<input type="text" className="form-control dropdown-toggle" placeholder="Search..." id="top-search"/>
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

				<div className="container-fluid">
	
					<div className="row">
						<div className="col-12">
							<div className="page-title-box">
								<div className="page-title-right">
									<form className="form-inline">
										<div className="form-group">
											<div className="input-group">
												<input type="text" className="form-control form-control-light" id="dash-daterange"/>
												<div className="input-group-append">
													<span className="input-group-text bg-success border-success text-white">
													<i className="mdi mdi-calendar-range font-13"></i>
													</span>
												</div>
											</div>
										</div>
										<a href="javascript: void(0);" className="btn btn-success ml-2">
										<i className="mdi mdi-autorenew"></i>
										</a>
									</form>
								</div>
								<h4 className="page-title">Vertical</h4>
							</div>
						</div>
					</div>
	
					<div className="row">
						<div className="col-xl-5 col-lg-6">
							<div className="row">
								<div className="col-lg-6">
									<div className="card widget-flat">
										<div className="card-body">
											<div className="float-right">
												<i className="mdi mdi-account-multiple widget-icon bg-success-lighten text-success"></i>
											</div>
											<h5 className="text-muted font-weight-normal mt-0" title="Number of Customers">Customers</h5>
											<h3 className="mt-3 mb-3">36,254</h3>
											<p className="mb-0 text-muted">
												<span className="text-success mr-2"><i className="mdi mdi-arrow-up-bold"></i> 5.27%</span>
												<span className="text-nowrap">Since last month</span>  
											</p>
										</div>
		
									</div>
	
								</div>
		
								<div className="col-lg-6">
									<div className="card widget-flat">
										<div className="card-body">
											<div className="float-right">
												<i className="mdi mdi-cart-plus widget-icon bg-danger-lighten text-danger"></i>
											</div>
											<h5 className="text-muted font-weight-normal mt-0" title="Number of Orders">Orders</h5>
											<h3 className="mt-3 mb-3">5,543</h3>
											<p className="mb-0 text-muted">
												<span className="text-danger mr-2"><i className="mdi mdi-arrow-down-bold"></i> 1.08%</span>
												<span className="text-nowrap">Since last month</span>
											</p>
										</div>
			
									</div>
			
								</div>
	
							</div>
		
							<div className="row">
								<div className="col-lg-6">
									<div className="card widget-flat">
										<div className="card-body">
											<div className="float-right">
												<i className="mdi mdi-currency-usd widget-icon bg-info-lighten text-info"></i>
											</div>
											<h5 className="text-muted font-weight-normal mt-0" title="Average Revenue">Revenue</h5>
											<h3 className="mt-3 mb-3">$6,254</h3>
											<p className="mb-0 text-muted">
												<span className="text-danger mr-2"><i className="mdi mdi-arrow-down-bold"></i> 7.00%</span>
												<span className="text-nowrap">Since last month</span>
											</p>
										</div>
		
									</div>
		
								</div>
		
								<div className="col-lg-6">
									<div className="card widget-flat">
										<div className="card-body">
											<div className="float-right">
												<i className="mdi mdi-pulse widget-icon bg-warning-lighten text-warning"></i>
											</div>
											<h5 className="text-muted font-weight-normal mt-0" title="Growth">Growth</h5>
											<h3 className="mt-3 mb-3">+ 30.56%</h3>
											<p className="mb-0 text-muted">
												<span className="text-success mr-2"><i className="mdi mdi-arrow-up-bold"></i> 4.87%</span>
												<span className="text-nowrap">Since last month</span>
											</p>
										</div>
		
									</div>
	
								</div>
			
							</div>
		
						</div>
		
						<div className="col-xl-7  col-lg-6">
							<div className="card">
								<div className="card-body">
									<div className="dropdown float-right">
										<a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
										<i className="mdi mdi-dots-vertical"></i>
										</a>
										<div className="dropdown-menu dropdown-menu-right">
						
											<a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
					
											<a href="javascript:void(0);" className="dropdown-item">Export Report</a>
					
											<a href="javascript:void(0);" className="dropdown-item">Profit</a>
					
											<a href="javascript:void(0);" className="dropdown-item">Action</a>
										</div>
									</div>
									<h4 className="header-title mb-3">Projections Vs Actuals</h4>
									<div id="high-performing-product" className="apex-charts"
										data-colors="#fa6767,#e3eaef"></div>
							
								</div>
			
							</div>
		
						</div>
			
					</div>
			
					<div className="row">
						<div className="col-lg-8">
							<div className="card">
								<div className="card-body">
									<div className="dropdown float-right">
										<a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
										<i className="mdi mdi-dots-vertical"></i>
										</a>
										<div className="dropdown-menu dropdown-menu-right">
					
											<a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
						
											<a href="javascript:void(0);" className="dropdown-item">Export Report</a>
						
											<a href="javascript:void(0);" className="dropdown-item">Profit</a>
			
											<a href="javascript:void(0);" className="dropdown-item">Action</a>
										</div>
									</div>
									<h4 className="header-title mb-3">Revenue</h4>
									<div className="chart-content-bg">
										<div className="row text-center">
											<div className="col-md-6">
												<p className="text-muted mb-0 mt-3">Current Week</p>
												<h2 className="font-weight-normal mb-3">
													<small className="mdi mdi-checkbox-blank-circle text-primary align-middle mr-1"></small>
													<span>$58,254</span>
												</h2>
											</div>
											<div className="col-md-6">
												<p className="text-muted mb-0 mt-3">Previous Week</p>
												<h2 className="font-weight-normal mb-3">
													<small className="mdi mdi-checkbox-blank-circle text-success align-middle mr-1"></small>
													<span>$69,524</span>
												</h2>
											</div>
										</div>
									</div>
									<div className="dash-item-overlay d-none d-md-block">
										<h5>Today's Earning: $2,562.30</h5>
										<p className="text-muted font-13 mb-3 mt-2">Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
											Etiam rhoncus...
										</p>
										<a href="javascript: void(0);" className="btn btn-outline-primary">View Statements
										<i className="mdi mdi-arrow-right ml-2"></i>
										</a>
									</div>
									<div id="revenue-chart" className="apex-charts mt-3" 
										data-colors="#3688fc,#f9bc0d"></div>
								</div>
					
							</div>
			
						</div>
		
						<div className="col-lg-4">
							<div className="card">
								<div className="card-body">
									<div className="dropdown float-right">
										<a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
										<i className="mdi mdi-dots-vertical"></i>
										</a>
										<div className="dropdown-menu dropdown-menu-right">
					
											<a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
						
											<a href="javascript:void(0);" className="dropdown-item">Export Report</a>
					
											<a href="javascript:void(0);" className="dropdown-item">Profit</a>
						
											<a href="javascript:void(0);" className="dropdown-item">Action</a>
										</div>
									</div>
									<h4 className="header-title">Revenue By Location</h4>
									<div className="mb-4 mt-4">
										<div id="world-map-markers" style={{"height": "224px"}}></div>
									</div>
									<h5 className="mb-1 mt-0 font-weight-normal">New York</h5>
									<div className="progress-w-percent">
										<span className="progress-value font-weight-bold">72k </span>
										<div className="progress progress-sm">
											<div className="progress-bar bg-dark" role="progressbar" style={{"width": "72%"}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
									<h5 className="mb-1 mt-0 font-weight-normal">San Francisco</h5>
									<div className="progress-w-percent">
										<span className="progress-value font-weight-bold">39k </span>
										<div className="progress progress-sm">
											<div className="progress-bar bg-warning" role="progressbar" style={{"width": "39%"}} aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
									<h5 className="mb-1 mt-0 font-weight-normal">Sydney</h5>
									<div className="progress-w-percent">
										<span className="progress-value font-weight-bold">25k </span>
										<div className="progress progress-sm">
											<div className="progress-bar bg-info" role="progressbar" style={{"width": "39%"}} aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
									<h5 className="mb-1 mt-0 font-weight-normal">Singapore</h5>
									<div className="progress-w-percent mb-0">
										<span className="progress-value font-weight-bold">61k </span>
										<div className="progress progress-sm">
											<div className="progress-bar bg-success" role="progressbar" style={{"width": "61%"}} aria-valuenow="61" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
			
							</div>
			
						</div>
			
					</div>
		
					<div className="row">
						<div className="col-xl-6 col-lg-12 order-lg-2 order-xl-1">
							<div className="card">
								<div className="card-body">
									<a href="" className="btn btn-sm btn-link float-right mb-3">Export
									<i className="mdi mdi-download ml-1"></i>
									</a>
									<h4 className="header-title mt-2">Top Selling Products</h4>
									<div className="table-responsive">
										<table className="table table-centered table-nowrap table-hover mb-0">
											<tbody>
												<tr>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">ASOS Ridley High Waist</h5>
														<span className="text-muted font-13">07 April 2018</span>
													</td>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">$79.49</h5>
														<span className="text-muted font-13">Price</span>
													</td>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">82</h5>
														<span className="text-muted font-13">Quantity</span>
													</td>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">$6,518.18</h5>
														<span className="text-muted font-13">Amount</span>
													</td>
												</tr>
												<tr>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">Marco Lightweight Shirt</h5>
														<span className="text-muted font-13">25 March 2018</span>
													</td>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">$128.50</h5>
														<span className="text-muted font-13">Price</span>
													</td>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">37</h5>
														<span className="text-muted font-13">Quantity</span>
													</td>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">$4,754.50</h5>
														<span className="text-muted font-13">Amount</span>
													</td>
												</tr>
												<tr>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">Half Sleeve Shirt</h5>
														<span className="text-muted font-13">17 March 2018</span>
													</td>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">$39.99</h5>
														<span className="text-muted font-13">Price</span>
													</td>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">64</h5>
														<span className="text-muted font-13">Quantity</span>
													</td>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">$2,559.36</h5>
														<span className="text-muted font-13">Amount</span>
													</td>
												</tr>
												<tr>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">Lightweight Jacket</h5>
														<span className="text-muted font-13">12 March 2018</span>
													</td>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">$20.00</h5>
														<span className="text-muted font-13">Price</span>
													</td>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">184</h5>
														<span className="text-muted font-13">Quantity</span>
													</td>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">$3,680.00</h5>
														<span className="text-muted font-13">Amount</span>
													</td>
												</tr>
												<tr>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">Marco Shoes</h5>
														<span className="text-muted font-13">05 March 2018</span>
													</td>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">$28.49</h5>
														<span className="text-muted font-13">Price</span>
													</td>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">69</h5>
														<span className="text-muted font-13">Quantity</span>
													</td>
													<td>
														<h5 className="font-14 my-1 font-weight-normal">$1,965.81</h5>
														<span className="text-muted font-13">Amount</span>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
					
								</div>
				
							</div>
		
						</div>
		
						<div className="col-xl-3 col-lg-6 order-lg-1">
							<div className="card">
								<div className="card-body">
									<div className="dropdown float-right">
										<a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
										<i className="mdi mdi-dots-vertical"></i>
										</a>
										<div className="dropdown-menu dropdown-menu-right">
								
											<a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
						
											<a href="javascript:void(0);" className="dropdown-item">Export Report</a>
					
											<a href="javascript:void(0);" className="dropdown-item">Profit</a>
					
											<a href="javascript:void(0);" className="dropdown-item">Action</a>
										</div>
									</div>
									<h4 className="header-title">Total Sales</h4>
									<div id="average-sales" className="apex-charts mb-4 mt-4"
										data-colors="#3688fc,#6c757d,#42d29d,#fa6767"></div>
									<div className="chart-widget-list">
										<p>
											<i className="mdi mdi-square text-primary"></i> Direct
											<span className="float-right">$300.56</span>
										</p>
										<p>
											<i className="mdi mdi-square text-danger"></i> Affilliate
											<span className="float-right">$135.18</span>
										</p>
										<p>
											<i className="mdi mdi-square text-success"></i> Sponsored
											<span className="float-right">$48.96</span>
										</p>
										<p className="mb-0">
											<i className="mdi mdi-square text-warning"></i> E-mail
											<span className="float-right">$154.02</span>
										</p>
									</div>
								</div>
					
							</div>
					
						</div>
				
						<div className="col-xl-3 col-lg-6 order-lg-1">
							<div className="card">
								<div className="card-body">
									<div className="dropdown float-right">
										<a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
										<i className="mdi mdi-dots-vertical"></i>
										</a>
										<div className="dropdown-menu dropdown-menu-right">
							
											<a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
							
											<a href="javascript:void(0);" className="dropdown-item">Export Report</a>
								
											<a href="javascript:void(0);" className="dropdown-item">Profit</a>
								j,nb vc
											<a href="javascript:void(0);" className="dropdown-item">Action</a>
										</div>
									</div>
									<h4 className="header-title mb-2">Recent Activity</h4>
									<div data-simplebar style={{"max-height": "424px"}}>
										<div className="timeline-alt pb-0">
											<div className="timeline-item">
												<i className="mdi mdi-upload bg-info-lighten text-info timeline-icon"></i>
												<div className="timeline-item-info">
													<a href="#" className="text-info font-weight-bold mb-1 d-block">You sold an item</a>
													<small>Paul Burgess just purchased ???Hyper - Admin Dashboard???!</small>
													<p className="mb-0 pb-2">
														<small className="text-muted">5 minutes ago</small>
													</p>
												</div>
											</div>
											<div className="timeline-item">
												<i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
												<div className="timeline-item-info">
													<a href="#" className="text-primary font-weight-bold mb-1 d-block">Product on the Bootstrap Market</a>
													<small>Dave Gamache added
													<span className="font-weight-bold">Admin Dashboard</span>
													</small>
													<p className="mb-0 pb-2">
														<small className="text-muted">30 minutes ago</small>
													</p>
												</div>
											</div>
											<div className="timeline-item">
												<i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
												<div className="timeline-item-info">
													<a href="#" className="text-info font-weight-bold mb-1 d-block">Robert Delaney</a>
													<small>Send you message
													<span className="font-weight-bold">"Are you there?"</span>
													</small>
													<p className="mb-0 pb-2">
														<small className="text-muted">2 hours ago</small>
													</p>
												</div>
											</div>
											<div className="timeline-item">
												<i className="mdi mdi-upload bg-primary-lighten text-primary timeline-icon"></i>
												<div className="timeline-item-info">
													<a href="#" className="text-primary font-weight-bold mb-1 d-block">Audrey Tobey</a>
													<small>Uploaded a photo
													<span className="font-weight-bold">"Error.jpg"</span>
													</small>
													<p className="mb-0 pb-2">
														<small className="text-muted">14 hours ago</small>
													</p>
												</div>
											</div>
											<div className="timeline-item">
												<i className="mdi mdi-upload bg-info-lighten text-info timeline-icon"></i>
												<div className="timeline-item-info">
													<a href="#" className="text-info font-weight-bold mb-1 d-block">You sold an item</a>
													<small>Paul Burgess just purchased ???Hyper - Admin Dashboard???!</small>
													<p className="mb-0 pb-2">
														<small className="text-muted">16 hours ago</small>
													</p>
												</div>
											</div>
											<div className="timeline-item">
												<i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
												<div className="timeline-item-info">
													<a href="#" className="text-primary font-weight-bold mb-1 d-block">Product on the Bootstrap Market</a>
													<small>Dave Gamache added
													<span className="font-weight-bold">Admin Dashboard</span>
													</small>
													<p className="mb-0 pb-2">
														<small className="text-muted">22 hours ago</small>
													</p>
												</div>
											</div>
											<div className="timeline-item">
												<i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
												<div className="timeline-item-info">
													<a href="#" className="text-info font-weight-bold mb-1 d-block">Robert Delaney</a>
													<small>Send you message
													<span className="font-weight-bold">"Are you there?"</span>
													</small>
													<p className="mb-0 pb-2">
														<small className="text-muted">2 days ago</small>
													</p>
												</div>
											</div>
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
							<script>document.write(new Date().getFullYear())</script> ?? Hyper - Coderthemes.com
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
