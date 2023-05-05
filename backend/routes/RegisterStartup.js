const db = require('../dbms');

function register(req, res) {
    const user = {
        fullname: req.body.fname,
        compmail: req.body.company_mail,
        founderlinkedin: req.body.founder_linkedin,
        compname: req.body.reg_company_name,
        companylinkedin: req.body.company_linkedin,
        website: req.body.website,
        prevfund: req.body.prev_fundraises,
        product: req.body.product,
        traction: req.body.traction,
        revenue: req.body.revenue,
        teamsize: req.body.team_size,
        whyraise: req.body.why_raise,
        whynovus: req.body.why_novus,
        existingcommitments: req.body.existing_commitments
    }

    db.query('INSERT INTO user (fullName,compEmail,founderLinkedIn,compName,companyLinkedIn,website,prevFund,product,traction,revenue,teamSize,whyRaise,whyNovus,existingCommitments) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [user.fullname, user.compmail, user.founderlinkedin, user.compname, user.companylinkedin, user.website, user.prevfund, user.product, user.traction, user.revenue, user.teamsize, user.whyraise, user.whynovus, user.existingcommitments],
        async (err, result) => {
            try {
                console.log(result)
                res.status(200).send('StartUp Registered');
            }
            catch (err) {
                console.error(err);
                res.status(500).send('Server Error');
            }
        }
    )
}

module.exports = register;