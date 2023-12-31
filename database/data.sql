-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:

--  insert into "todos"
--    ("task", "isCompleted")
--    values
--      ('Learn to code', false),
--      ('Build projects', false),
--      ('Get a job', false);


insert into "projects"
("name", "imageUrl", "githubUrl", "domainUrl")
values
('CastingRecall', '/images/CastingRecall.png', 'https://github.com/TyStahl/Casting-Recall', 'https://tystahl.github.io/Casting-Recall/'),
('DgExpo', '/images/DiscExpo.png', 'https://github.com/TyStahl/dgExpo', 'http://dgexpo-dev.us-west-1.elasticbeanstalk.com/')
