import { Route, Routes } from "react-router-dom"
import Dashboard from "../pages/freelancer/Dashboard"
import AdminDashboard from "../pages/admin/Dashboard"
import ManagerDashboard from "../pages/projectManager/Dashboard"
import OpenProjectPage from "../pages/freelancer/OpenProjectPage"
import AdminOpenProjectPage from "../pages/admin/OpenProjectPage"
import ManagerOpenProjectPage from "../pages/projectManager/OpenProjectPage"
import MainDashboardPage from "../pages/freelancer/MainDashboardPage";
import MainAdminDashboardPage from "../pages/admin/MainDashboardPage";
import MainManagerDashboardPage from "../pages/projectManager/MainDashboardPage";
import ProjectDetails from "../pages/freelancer/ProjectDetails";
import AdminProjectDetails from "../pages/admin/ProjectDetails";
import ManagerProjectDetails from "../pages/projectManager/ProjectDetails";
import PotentialDonorsPage from "../pages/freelancer/PotentialDonorsPage";
import AdminPotentialDonorsPage from "../pages/admin/PotentialDonorsPage";
import ManagerPotentialDonorsPage from "../pages/projectManager/PotentialDonorsPage";
import FreelancersPage from "../pages/freelancer/FreelancersPage";
import AdminFreelancersPage from "../pages/admin/FreelancersPage";
import ManagerFreelancersPage from "../pages/projectManager/FreelancersPage";
import FreelancerProfile from "../pages/freelancer/FreelancerProfile";
import AdminFreelancerProfile from "../pages/admin/FreelancerProfile";
import ManagerFreelancerProfile from "../pages/projectManager/FreelancerProfile";
import TemplatesPage from "../pages/freelancer/TemplatesPage";
import AdminTemplatesPage from "../pages/admin/TemplatesPage";
import ManagerTemplatesPage from "../pages/projectManager/TemplatesPage";
import CalendarPage from "../pages/freelancer/CalenderPage";
import AdminCalendarPage from "../pages/admin/CalenderPage";
import NotesPage from "../pages/freelancer/NotesPage";
import AdminNotesPage from "../pages/admin/NotesPage";
import ManagerNotesPage from "../pages/projectManager/NotesPage";
import OtherServicesPage from "../pages/freelancer/OtherServicesPage";
import AdminOtherServicesPage from "../pages/admin/OtherServicesPage";
import ManagerOtherServicesPage from "../pages/projectManager/OtherServicesPage";
import ServiecDetailsPage from "../pages/freelancer/ServiecDetailsPage";
import AdminServiecDetailsPage from "../pages/admin/ServiecDetailsPage";
import ManagerServiecDetailsPage from "../pages/projectManager/ServiecDetailsPage";
import AskforaservicePage from "../pages/freelancer/AskforaservicePage";
import ManagerAskforaservicePage from "../pages/projectManager/AskforaservicePage";
import MyAccountPage from "../pages/freelancer/MyAccountPage";
import AdminMyAccountPage from "../pages/admin/MyAccountPage";
import ManagerMyAccountPage from "../pages/projectManager/MyAccountPage";
import LoginPage from "../pages/login/LoginPage";
import SignUpAsClientPage from "../pages/login/SignUpAsClientPage";
import JoinasPage from "../pages/login/JoinasPage";
import NotificationsPage from "../pages/freelancer/NotificationsPage";
import AminNotificationsPage from "../pages/admin/NotificationsPage";
import ManagerNotificationsPage from "../pages/projectManager/NotificationsPage";
import DonorDetails from "../pages/freelancer/DonorDetailsPage";
import AdminDonorDetails from "../pages/admin/DonorDetailsPage";
import ManagerDonorDetails from "../pages/projectManager/DonorDetailsPage";
import MyProject from "../pages/freelancer/MyProjectsPage";
import MAnagerMyProject from "../pages/projectManager/MyProjectsPage";
import OrganizationsPage from "../pages/freelancer/OrganizationsPage";
import AdminOrganizationsPage from "../pages/admin/OrganizationsPage";
import ManagerOrganizationsPage from "../pages/projectManager/OrganizationsPage";
import OrganizationProfile from "../pages/freelancer/OrganizationProfile";
import AdminOrganizationProfile from "../pages/admin/OrganizationProfile";
import ManagerOrganizationProfile from "../pages/projectManager/OrganizationProfile";
import AddNewProjectPage from "../pages/admin/AddNewProjectPage"
import ManagerAddNewProjectPage from "../pages/projectManager/AddNewProjectPage"
import AddNewDonorPage from "../pages/admin/AddNewDonorPage"
import AddNewFreelancerPage from "../pages/admin/AddNewFreelancerPage"
import ManagerAddNewFreelancerPage from "../pages/projectManager/AddNewFreelancerPage"
import HireTalentPage from "../pages/admin/HireTalentPage"
import ManagerTalentPage from "../pages/projectManager/HireTalentPage"
import AddNewTemplate from "../pages/admin/AddNewTemplatesPage"
import AddNewServicePage from "../pages/admin/AddNewServicePage"
import SignUpAsFreelancerPage from "../pages/login/SignUpAsFreelancerPage"

const appRoute = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />}>
                <Route path="/dashboard" element={<MainDashboardPage />} />
                <Route path="/dashboard/openProject" element={<OpenProjectPage />} />
                <Route path="/dashboard/openProject/myproject" element={<MyProject />} />
                <Route path="/dashboard/openProject/ProjectDetails" element={<ProjectDetails />} />
                <Route path="/dashboard/PotentialDonors" element={<PotentialDonorsPage />} />
                <Route path="/dashboard/PotentialDonors/DonorDetails" element={<DonorDetails />} />
                <Route path="/dashboard/Freelancers" element={<FreelancersPage />} />
                <Route path="/dashboard/OrganizationsPage" element={<OrganizationsPage />} />
                <Route path="/dashboard/OrganizationProfile" element={<OrganizationProfile />} />
                <Route path="/dashboard/Freelancers/FreelancerProfile" element={<FreelancerProfile />} />
                <Route path="/dashboard/Templates" element={<TemplatesPage />} />
                <Route path="/dashboard/Calendar" element={<CalendarPage />} />
                <Route path="/dashboard/Note" element={<NotesPage />} />
                <Route path="/dashboard/Services" element={<OtherServicesPage />} />
                <Route path="/dashboard/Services/ServiecDetail" element={<ServiecDetailsPage />} />
                <Route path="/dashboard/Services/Askforaservice" element={<AskforaservicePage />} />
                <Route path="/dashboard/MyAccount" element={<MyAccountPage />} />
                <Route path="/dashboard/Notifications" element={<NotificationsPage />} />

            </Route>
            <Route path="/adminDashboard" element={<AdminDashboard />}>
                <Route path="/adminDashboard" element={<MainAdminDashboardPage />} />
                <Route path="/adminDashboard/AminNotifications" element={<AminNotificationsPage />} />
                <Route path="/adminDashboard/openProject" element={<AdminOpenProjectPage />} />
                <Route path="/adminDashboard/openProject/addnew" element={<AddNewProjectPage />} />
                <Route path="/adminDashboard/openProject/ProjectDetails" element={<AdminProjectDetails />} />
                <Route path="/adminDashboard/PotentialDonors" element={<AdminPotentialDonorsPage />} />
                <Route path="/adminDashboard/PotentialDonors/addnew" element={<AddNewDonorPage />} />
                <Route path="/adminDashboard/PotentialDonors/DonorDetails" element={<AdminDonorDetails />} />
                <Route path="/adminDashboard/Freelancers" element={<AdminFreelancersPage />} />
                <Route path="/adminDashboard/OrganizationsPage" element={<AdminOrganizationsPage />} />
                <Route path="/adminDashboard/Freelancers/FreelancerProfile" element={<AdminFreelancerProfile />} />
                <Route path="/adminDashboard/OrganizationProfile" element={<AdminOrganizationProfile />} />
                <Route path="/adminDashboard/Freelancers/addnewfreelancer" element={<AddNewFreelancerPage />} />
                <Route path="/adminDashboard/Freelancers/hiretalent" element={<HireTalentPage />} />
                <Route path="/adminDashboard/Templates" element={<AdminTemplatesPage />} />
                <Route path="/adminDashboard/Templates/addnew" element={<AddNewTemplate />} />
                <Route path="/adminDashboard/Calendar" element={<AdminCalendarPage />} />
                <Route path="/adminDashboard/Services" element={<AdminOtherServicesPage />} />
                <Route path="/adminDashboard/Services/addnew" element={<AddNewServicePage />} />
                <Route path="/adminDashboard/Services/ServiecDetail" element={<AdminServiecDetailsPage />} />
                <Route path="/adminDashboard/Note" element={<AdminNotesPage />} />
                <Route path="/adminDashboard/MyAccount" element={<AdminMyAccountPage />} />
            </Route>
            <Route path="/managerDashboard" element={<ManagerDashboard />}>
                <Route path="/managerDashboard" element={<MainManagerDashboardPage />} />
                <Route path="/managerDashboard/AminNotifications" element={<ManagerNotificationsPage />} />
                <Route path="/managerDashboard/openProject" element={<ManagerOpenProjectPage />} />
                <Route path="/managerDashboard/openProject/addnew" element={<ManagerAddNewProjectPage />} />
                <Route path="/managerDashboard/openProject/myproject" element={<MAnagerMyProject />} />
                <Route path="/managerDashboard/openProject/ProjectDetails" element={<ManagerProjectDetails />} />
                <Route path="/managerDashboard/PotentialDonors" element={<ManagerPotentialDonorsPage />} />
                <Route path="/managerDashboard/PotentialDonors/DonorDetails" element={<ManagerDonorDetails />} />
                <Route path="/managerDashboard/Freelancers" element={<ManagerFreelancersPage />} />
                <Route path="/managerDashboard/OrganizationsPage" element={<ManagerOrganizationsPage />} />
                <Route path="/managerDashboard/Freelancers/FreelancerProfile" element={<ManagerFreelancerProfile />} />
                <Route path="/managerDashboard/OrganizationProfile" element={<ManagerOrganizationProfile />} />
                <Route path="/managerDashboard/Freelancers/addnewfreelancer" element={<ManagerAddNewFreelancerPage />} />
                <Route path="/managerDashboard/Freelancers/hiretalent" element={<ManagerTalentPage />} />
                <Route path="/managerDashboard/Templates" element={<ManagerTemplatesPage />} />
                <Route path="/managerDashboard/Calendar" element={<CalendarPage />} />
                <Route path="/managerDashboard/Services" element={<ManagerOtherServicesPage />} />
                <Route path="/managerDashboard/Services/ServiecDetail" element={<ManagerServiecDetailsPage />} />
                <Route path="/managerDashboard/Services/Askforaservice" element={<ManagerAskforaservicePage />} />
                <Route path="/managerDashboard/Note" element={<ManagerNotesPage />} />
                <Route path="/managerDashboard/MyAccount" element={<ManagerMyAccountPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" exact element={<JoinasPage />} />
            <Route path="/signup-client" element={<SignUpAsClientPage />} />
            {/* <Route path="/signup-freelancer" render={() => <SignUpAsClientPage role="freelancer" />} /> */}
            <Route path="/signup-freelancer" element={<SignUpAsFreelancerPage />} />
        </Routes>
    )
}

export default appRoute