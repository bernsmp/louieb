-- Seed data for Louie CMS
-- Run this after schema.sql to populate initial content

-- ============================================================================
-- DEFAULT TESTIMONIALS
-- ============================================================================
INSERT INTO testimonials (quote, author, role, company, display_order) VALUES
('When Louie came on board he wrote and organized our outbound scripts and emails. We now had everyone working off the same playbook, and it gave us consistency.', 'Neal Reynolds', 'CEO', 'BankMarketingCenter.com', 1),
('Thank you Louie for what you have done in the past year. I believe our sales are far better than where they were a year ago, great job.', 'Kevin Zhao', 'CEO', 'ZBS POS', 2),
('You taught me a great deal, the lessons will always stick with me. Your teachings have contributed to me being a better sales professional.', 'Laura H.', 'Sales Tech Strategist', NULL, 3),
('I worked for Louie for over four years. During that time our team had constant sales growth. Louie''s leadership and sales processes were key to that growth.', 'David Yasson', 'Group Manager, Strategic Accounts', 'Intuit', 4),
('In the thirty years I have had the privilege to know and work with Louie, I have observed him to be organized, efficient, extremely competent, and have an excellent rapport with people.', 'Jim Nelms', 'Chief Information Security Officer', NULL, 5),
('If you needed help closing a deal, Louie was your man. He helped me to improve my social skills and learn how to speak to people in a way that would get them to like and trust me.', 'Richard Adrian, CEM', 'Building Automation Systems Sales Engineer', NULL, 6),
('Louie is a highly effective and very successful sales leader. He developed processes that allow him to be on top of all details, making him extremely efficient.', 'Stephen W.', 'CEO, Active Angel Investor', NULL, 7),
('His professionalism, his great desire to succeed, his professional ethics, as well as leadership gave me confidence to do many things in my own career.', 'Christopher H. Short', 'Software Engineering, CIO, CTO', NULL, 8),
('He is one of the best general managers that I have worked with and is a great leader.', 'Victor Hodges - CISSP', 'Information Systems Specialist - Infosec', NULL, 9),
('Louie is a great leader. His energy and positive business strategies are infectious. I learned a great deal working for Louie.', 'Laura Diem', 'Operations and Customer Experience', NULL, 10),
('Not to be cliché, but Louie has forgotten more about sales and marketing than most people know. He is a tenacious, hard-working competitor.', 'Dan McDade', 'Managing Partner @ Prospect-Experience | B2B Marketing Expert', NULL, 11)
ON CONFLICT DO NOTHING;

-- ============================================================================
-- DEFAULT FAQ ITEMS (Homepage)
-- ============================================================================
INSERT INTO faq_items (question, answer, page, display_order) VALUES
('What is fractional sales leadership?', 'Fractional sales leadership is an outsourced service where an experienced sales leader works part-time with a company to organize, optimize, and train their sales team.', 'homepage', 1),
('How does fractional sales leadership work?', 'A fractional sales leader integrates with your existing sales team, assessing current processes, identifying areas for improvement, and implementing strategies to boost sales performance. They provide guidance, training, and support on a part-time basis.', 'homepage', 2),
('Who is fractional sales leadership for?', 'Fractional sales leadership is ideal for small to medium-sized businesses that want to improve their sales processes and results without the cost of hiring a full-time sales executive.', 'homepage', 3),
('How much does fractional sales leadership cost?', 'Pricing for fractional sales leadership varies depending on the scope of the engagement and the specific needs of the client. Contact Louie Bernstein for a customized quote.', 'homepage', 4),
('What is the time commitment for fractional sales leadership?', 'The time commitment is flexible and can be adapted to the client''s needs. Engagements typically range from a few months to a year or more, with the fractional sales leader working on a part-time basis.', 'homepage', 5),
('What results can I expect from fractional sales leadership?', 'Clients can expect improved sales processes, increased team efficiency, and ultimately, higher sales revenue. Past clients have reported significant improvements in their sales performance after working with Louie Bernstein.', 'homepage', 6),
('What is the process for working with a fractional sales leader?', 'The process typically involves an initial consultation to assess the client''s current sales situation and goals, followed by the development of a customized strategy. The fractional sales leader then works with the team to implement the strategy, provide training, and monitor progress.', 'homepage', 7)
ON CONFLICT DO NOTHING;

-- ============================================================================
-- DEFAULT FAQ ITEMS (FSL Page)
-- ============================================================================
INSERT INTO faq_items (question, answer, page, display_order) VALUES
('What is a Fractional Sales Leader?', 'A Fractional Sales Leader is an experienced sales executive who works with your company part-time instead of full-time. You get the expertise of a VP of Sales—building processes, coaching reps, managing pipeline—without the $250K+ salary, benefits, and equity. I''ve worked as a Fractional Sales Leader for 9+ years, helping 50+ companies in the $1M-$10M ARR range build repeatable sales systems.', 'fslPage', 1),
('How much does a Fractional Sales Leader cost?', 'Fractional Sales Leaders typically cost 30-50% of what you''d pay a full-time VP of Sales. Instead of $250K-$400K annually (salary + benefits + equity), you''re looking at $5K-$15K per month depending on engagement scope. The ROI comes fast—most of my clients see measurable improvement in their sales process within 90 days.', 'fslPage', 2),
('When should I hire a Fractional Sales Leader?', 'The sweet spot is $1M-$10M ARR. You''ve proven product-market fit, you''re closing deals, but you''re still the one running sales. You need someone to build the system, hire the team, and create the playbook—but you''re not ready for a $250K+ full-time hire. That''s exactly when a Fractional Sales Leader makes sense.', 'fslPage', 3),
('What''s the difference between a Fractional Sales Leader and a sales consultant?', 'Consultants give advice. I do the work. A Fractional Sales Leader embeds with your team, runs your pipeline meetings, coaches your reps, and builds your sales playbook. I''m not handing you a deck and walking away—I''m in the trenches with you until the system is running.', 'fslPage', 4),
('How many hours per week does a Fractional Sales Leader work?', 'It depends on your needs. Most engagements are 10-20 hours per week. That''s enough time to run weekly pipeline reviews, coach reps, build processes, and drive meaningful change. As your team matures and systems take hold, the hours can flex down.', 'fslPage', 5),
('Can a Fractional Sales Leader help me hire my first sales reps?', 'Absolutely. That''s one of the most valuable things I do. I''ve developed a hiring system with 120+ interview questions specifically designed for sales roles. I''ll help you write the job description, screen candidates, run interviews, and make the right hire the first time—so you don''t waste months on a bad fit.', 'fslPage', 6)
ON CONFLICT DO NOTHING;

-- ============================================================================
-- DEFAULT SERVICES
-- ============================================================================
INSERT INTO services (title, description, icon, highlight, display_order) VALUES
('Sales Team Organization', 'Structure your sales team for maximum efficiency. Clear roles, accountability, and reporting systems that keep everyone aligned.', '/icons/business-team-6621979.svg', false, 1),
('Sales Process Optimization', 'Streamline your sales process from lead to close. Eliminate bottlenecks and create a repeatable, scalable system.', '/icons/efficiency-6622003.svg', true, 2),
('Sales Team Training', 'Equip your team with the skills and knowledge they need. Customized training programs that address your specific challenges.', '/icons/guidance-6622007.svg', false, 3),
('Sales Playbook Development', 'Create a comprehensive playbook that ensures consistency. Scripts, emails, and processes that get everyone on the same page.', '/icons/business-plan-11962831.svg', false, 4),
('Pipeline Management', 'Implement proven pipeline management strategies. Forecast accurately and close more deals with predictable results.', '/icons/scalable-11962814.svg', true, 5),
('CRM Implementation', 'Set up and optimize your CRM for real results. Data-driven insights that help you make better decisions faster.', '/icons/analytics-11962812.svg', false, 6)
ON CONFLICT DO NOTHING;

-- ============================================================================
-- DEFAULT PROCESS STEPS
-- ============================================================================
INSERT INTO process_steps (step_number, title, description, display_order) VALUES
('01', 'Initial Consultation', 'We start with a deep dive into your current sales operations. I''ll assess your team, processes, and challenges to create a customized plan.', 1),
('02', 'Strategic Planning', 'Together, we''ll develop a roadmap for improvement. Clear objectives, measurable KPIs, and a timeline that works for your business.', 2),
('03', 'Implementation', 'I''ll work directly with your team to implement new systems and processes. Hands-on training ensures everyone knows exactly what to do.', 3),
('04', 'Optimization & Growth', 'Continuous improvement is key. We''ll monitor results, make adjustments, and scale what works to drive consistent growth.', 4)
ON CONFLICT DO NOTHING;

-- ============================================================================
-- DEFAULT FEATURED VIDEOS
-- ============================================================================
INSERT INTO videos (youtube_id, title, description, page, display_order) VALUES
('ScygjngNNY4', 'Build This Before Hiring Salespeople', 'Don''t hire sales reps until you have a playbook. Learn why building the system first is crucial for scaling revenue.', 'featured', 1),
('LgaJZ4R6Y-4', 'My 1st Sales Hire Mistake', 'Avoid common hiring pitfalls. Louie shares his personal experience with early sales hires and what he learned.', 'featured', 2),
('40BopNISisE', 'Build The System Before The Team', 'Why you need a sales system before a sales team. A fractional sales leader''s perspective on sustainable growth.', 'featured', 3),
('epPZ4qZBo5I', 'The Secret Email Step That Gets Replies', 'A tactical email outreach tip to increase your response rates immediately. Simple but effective.', 'featured', 4)
ON CONFLICT DO NOTHING;

-- ============================================================================
-- DEFAULT FSL PAGE VIDEOS
-- ============================================================================
INSERT INTO videos (youtube_id, title, description, page, display_order) VALUES
('86r0G5LfZ2s', 'What is Fractional Sales Leadership?', 'The basics. What a Fractional Sales Leader actually is, how the model works, and why it''s become the go-to option for $1M-$10M companies that need sales leadership without the $250K+ VP gamble.', 'fslPage', 1),
('apXilJj2924', 'Here''s What a Fractional Sales Leader Does', 'The day-to-day. Building your sales playbook, coaching your reps, managing your pipeline, and implementing the systems that turn chaos into predictable revenue.', 'fslPage', 2),
('wnXLkMoYMDY', 'Questions to Ask a Fractional Sales Leader', 'The interview. The specific questions you need to ask before signing an engagement. What to look for, what to avoid, and how to spot someone who actually knows what they''re doing.', 'fslPage', 3),
('TObs-tUQG7E', 'Fractional Sales Leader vs Sales VP', 'The comparison. When a fractional model makes sense, when you need a full-time hire, and how to make the right decision for your specific situation and growth stage.', 'fslPage', 4),
('COBBnVv8ZYE', 'Is a Fractional Sales Leader Right for Your Business?', 'The decision. An honest look at who benefits most from fractional sales leadership—and who doesn''t. I''ll tell you straight if this model fits your company.', 'fslPage', 5)
ON CONFLICT DO NOTHING;

-- ============================================================================
-- DEFAULT COURSE PREVIEW VIDEOS
-- ============================================================================
INSERT INTO videos (youtube_id, title, description, page, display_order) VALUES
('TlC353ew34o', 'Step 1. Putting Together Your Sales Playbook', NULL, 'course', 1),
('RuC-3vjtl6s', 'Step 2. Defining Your Ideal Customer (ICP)', NULL, 'course', 2),
('Lh-iTnOT0kA', 'Step 3. Hiring Your First Salespeople - The Right Way', NULL, 'course', 3),
('WxyaNBgAzrE', 'Step 4. The Sales Hiring System - Phase 2', NULL, 'course', 4)
ON CONFLICT DO NOTHING;

