import createComponentWithIntl from '@/test/testHelpers';

import TemplateSection3 from './TemplateSection3';

const agencyData = {
  id: `39455749-3310-53aa-b5fa-22590adc1e05`,
  A_NAME: `Environmental Protection Agency`,
  A_LOGO: `epa.png`,
  A_ADD1: `1200 Pennsylvania Avenue N.W.`,
  A_ADD2: `Washington, D.C. 20004`,
  A_PHONE: `(202) 564-4700`,
  A_URL: `epa.gov`,
  A_MISSION: `The Environmental Protection Agency (EPA) protects human health and the environment. EPA actively seeks to incorporate Environmental Justice at all levels of the agency, along with strategic partnerships with other federal, state, local, and tribal departments.`,
  J40_URLTXT: `epa.gov/justice40`,
  J40_URLLINK: `epa.gov/justice40`,
  A_EMAIL: ``,
  J40_TCP: `40`,
  J40_ANNOUNCE: `80`,
  J40_AMOUNT: `$28 million`,
  J40_E1: `Developed resources for states revising their disadvantaged community definitions and affordability criteria through the Clean Water State Revolving Fund (CWSRF), the Drinking Water State Revolving Fund (DWSRF), the Water Infrastructure Improvements for the Nation (WIIN), and Bipartisan Infrastructure Law (BIL) funding`,
  J40_E2: `Engaged with State Revolving Fund partners to prioritize and launch technical assistance pilots for disadvantaged communities`,
  J40_E3: `Prioritized financing projects in economically stressed communities in the Water Infrastructure Finance and Innovation Act (WIFIA) program FY22 Notice of Funding Availability (NOFA)`,
  J40_MOD1: ``,
  J40_MOD2: ``,
  J40_MOD3: ``,
  J40_HIGH: `•\tProvided assistance to [XX] communities through the Technical Assistance Services for Communities (TASC) program  •\tWorked with over 200 Tribal partners to design, develop, and publish curriculum about how to reduce childhood lead exposure, and hosted 10 training sessions in Tribal communities, reaching 450 participants  •\tImproved multilingual access to information, including Requests for Proposals, webinars, and in-person trainings  •\tConducted and participated in 27 federal outreach and engagement events in support of small and disadvantaged businesses, reaching over 700 participants in FY22`,
  A_STRATPLANTXT: ``,
  A_STRATPLANLINK: ``,
  A_NEPA: `EPA outlines NEPA policies and guidelines on their website, including Executive Order 12898, key steps in the NEPA process, how to approach public participation in decision making, and EJScreen—an Environmental Justice mapping and screening tool`,
  NUM_NEPA: `1`,
  NEPA_H1: `Hosted 3 public meetings with 200 participants regarding projects to reduce Tijuana River watershed pollution that affects communities in Tijuana/San Diego`,
  NEPA_H2: `Additional NEPA highlight`,
  NEPA_H3: `Additional NEPA highlight`,
  NEPA_TRAIN: `421`,
  TITLEVI_NAR: `Most complaints under investigation involve state and local agencies and allege that actions or inactions have disparate impacts, and have subjected people to discrimination on the basis of race, national origin, disability, and/or age. Complaints involve many types of facilities and services, including: petrochemical, asphalt, concrete, recycling, CAFO, and water treatment and management services/facilities.`,
  TITLEVI_N: `28`,
  TITLEVI_R_N: `2`,
  A_NAR: `Formal partnerships between EPA and non-federal entities helps to advance Environmental Justice and/or inform policy and decision-making. Additionally, cooperative agreements support formal partnership agreements with states, Tribes, and community-based organizations.`,
  TA_N: `130`,
  TA_E1: `Events/webinars/workshops through The Environmental Justice Thriving Communities Technical Assistance Centers`,
  TA_E2: `Closing America’s Wastewater Access Gap`,
  TA_E3: `Technical assistance calls with communities with regional offices`,
  PP_N: `480`,
  PP_E1: `2 Journey to Justice tours, where EPA Administrator Michael S. Regan heard firsthand from communities facing Environmental Justice concerns in Puerto Rico, Mississippi, Louisiana, and Texas`,
  PP_E2: `5 public engagement sessions, attended by over 500 people, at 276 Superfund sites where there are environmental concerns. Participants had the opportunity to comment on the Office of Land and Emergency Management Environmental Justice Action Plan.`,
  PP_E3: `Office of Environmental Justice and External Civil Rights hosted 19 National Environmental Justice Community Engagement calls to inform the public about EPA's Environmental Justice work and enhance opportunities to maintain an open dialogue with advocates.`,
  TC_NAR: `EPA issued the Policy on Environmental Justice for Working with Federally Recognized Tribes and Indigenous Peoples in 2014, to advance Environmental Justice for the protection of the environment and public health`,
  TC_N: `18`,
  TC_E1: `Formal consultation and coordination with Indian Tribal Governments, as well as public engagement events with communities, on risk management for nine of the first 10 chemicals under risk evaluations by EPA`,
  TC_E2: `“EJ, Tribes, and Indigenous Peoples” training webinar in May 2022`,
  TC_E3: `“Reflections on What Indigenous Research Means,” with Dr. Kyle Whyte at the May 2021 Tribal Science Council (TSC) meeting`,
  ECR_HIGH: `Environmental and Civil Rights highlight space`,
  PLAN_BOOL: `Has`,
  PLAN_UPDATE: `was not`,
  EJP_E1: ``,
  EJP_E2: ``,
  EJP_E3: ``,
  EJTOOL_N: `70`,
  EJSTAFF_N: `206`,
  EJTRAIN_N: `25`,
  EJWG_N: `20`,
  EJP_NAR: ``,
  IEJ_HIGH: `Institutionalizing Environmental Justice    Federal agencies have been working to institutionalize Environmental Justice in keeping with their unique missions and the statutory authorities that govern their work, including to continue to implement Executive Order 12898, and to advance the objectives of Executive Order 14008. The following section describes example activities that the agency has taken from January 2021 to September 2022.    •\thas an Environmental Justice related Strategic Plan that was not updated in the last five years  •\t25 policies developed or updated related to Environmental Justice   •\t70 Environmental Justice tools or resources  •\t206 staff, either in a full- or part-time capacity, working on Environmental Justice  •\t421 trainings for staff on Environmental Justice, as a general study or regarding civil rights specifically  •\t20 Environmental Justice working groups, steering committees and/or councils    Additional Institutionalizing Environmental Justice Highlights at EPA    o\tAdded Environmental Justice components to different EPA efforts, such as the Border 2025 program guiding principles, adding “inclusion” as a cross-cutting research priority, and adding Environmental Justice as a component in the Excellence in Site Reuse Awards nomination form   o\tStrategic Research Action Plans (StRAPs) included approximately 145 research products that are "Environmental Justice-focused" or "Environmental Justice-relevant”  o\tIncluded Environmental Justice considerations into numerous competitive notice of funding opportunities.`,
};
describe(`rendering of TemplateSection3 Component`, () => {
  it(`checks if component renders`, () => {
    const component = createComponentWithIntl(
      <TemplateSection3 agencyData={agencyData} />,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
