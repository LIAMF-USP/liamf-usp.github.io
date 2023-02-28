# LIAMF Homepage

This is the git repository of the Logic, Artificial Intelligence and Formal Methods Lab (LIAMF)
homepage (https://liamf.ime.usp.br).

**If you are an incoming LIAMF member, read the next section.**

**If you are an outgoing member, read the next section after that.**

**If you are a returning member, (e.g. a previously MSc who is now a PhD candidate) read the next
section after the next section after that.**

## New members

To add yourself to the website under the *MEMBERS* section, please submit a new pull request
consisting of the following modifications:

1. Add a profile picture of yourself under `images/students/`;
2. In `js/members.js`, add yourself to the correct array (`postdoc`, `phd` or `msc`) as a 4-tuple
   composed out of (in order) your name, the name and extension of the profile picture you added in
   step 1, your website, and your research topics of interest;
3. Review your changes as they are applied to your fork, e.g.
   https://yourusername.github.io/liamf-usp.github.io/.

## Outgoing members

If you are outgoing, please add yourself to our alumni list. To do so, submit a new pull request
consisting of the following modifications:

1. Remove yourself from `js/members.js`;
2. In `js/alumni.js`, remove your name from the `current` array and add yourself to the `alumni`
   array as a 2-tuple where the first element is your **full name** as it appears in
   https://www.teses.usp.br/ and the second is your personal website;
3. Review your changes as they are applied to your fork, e.g.
   https://yourusername.github.io/liamf-usp.github.io/.

## Returning members

If you are a returning member, please make sure you are exempted from the alumni list. To do so,
submit a new pull request consisting of the following modifications:

1. Add yourself to `js/members.js` if you are not already there;
2. In `js/alumni.js`, add your **full** name as it appears in https://www.teses.usp.br/.
3. Review your changes as they are applied to your fork, e.g.
   https://yourusername.github.io/liamf-usp.github.io/.
