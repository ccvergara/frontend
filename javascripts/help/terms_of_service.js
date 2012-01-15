with (Hasher('TermsOfService','Application')) {
  route('#terms_of_service', function() {
    render(
      h1('Domain Name Registration Agreement'),
      h3('1. Introduction'),
      p('1.1. This domain name registration agreement ("Registration Agreement") governs the terms and conditions upon which Rhino Names, Inc (DBA "Badger.com") agrees to provide you ("Registered Name Holder") with the domain name registration service and associated services as described on the website located at www.Badger.com ("Website") and as otherwise described in this Registration Agreement ("Services").'),
      p('1.2. By using the Services, you acknowledge that you have read, understood, and agree to be bound by the terms and conditions of this Registration Agreement, as well as our Privacy Policy and Anti-Spam Policy.'),
      p('1.3. You acknowledge and agree that if you are in breach of this Registration Agreement, Badger.com may suspend, cancel or modify your use of the Services by providing you with notice to your primary email address listed on your Badger.com account.'),
      p('1.4. Badger.com reserves the right to amend the terms and conditions set out in this Registration Agreement or the operation of the Services by notice to your Badger.com account. Where we vary the charges applying to the Services, we will give you 14 days\' prior notice of the change. If you do not agree to the amendment of the terms or conditions of the Registration Agreement or the operation of the Services or the variation in the charges, you may terminate the Registration Agreement by emailing support@badger.com and we will assist you to transfer your domain name to the ICANN accredited domain name registrar of your choice.'),
      h3('2. Domain Name Registration, Administration, and Renewal Services'),
      p('2.1. Badger.com is an accredited Registrar of the Internet Corporation For Assigned Names and Numbers ("ICANN") for the .com, .net, .org, .biz and .info top level domains ("gTLDs").'),
      p('2.2. All gTLDs that Badger.com registers or renews for you ("Registered Names") shall not be effective unless and until the administrator for the .particular gTLD ("Registry") updates the central domain name registry database in accordance with the information you have provided to Badger.com, pursuant to the terms of the relevant Registry-Registrar Agreement entered into between that Registry and Badger.com.'),
      h3('3. Registration, Renewal, Recovery and Transfer of Domain Names'),
      p('3.1. Badger.com registers domain names on a first come, first served basis and does not guarantee that any domain name applied for by you will be able to be registered.'),
      p('3.2. You agree that you will not take any action in relation to a particular domain name until the successful registration of that domain name ("Registered Name") has been confirmed by Badger.com.'),
      p('3.3. You shall not have any proprietary rights in a Registered Name. Registration and/or renewal of a Registered Name only gives you a personal license ("Domain Name Licence") to use the Registered Name for the period during which the registration of the domain name remains current ("Registration Period").'),
      p('3.4. The continued registration and use of a Registered Name is subject to the payment of the applicable renewal fees prior to the expiry of the Registration Period and subject to your continued compliance with the terms of this Registration Agreement and any rules or policies published on the Website. In the event that the applicable renewal fees for a Registered Name have not been received by Badger.com (as cleared funds) on or before the expiry date, Badger.com reserves the right to immediately cancel the registration of the Registered Name and remove it from the Registry\'s root zone file, at which time, the Registered Name will cease to resolve to the nominated nameservers.'),
      p('3.5. If you agree to have the Registration Period for the Registered Name automatically renewed by selecting the \'Auto-Renewal\' feature (accessible via the online interface to your Badger.com account), then:'),
      p('3.5.1 Badger.com will automatically renew the Registration Period for the Registered Name for a period of one (1) year from the expiry date of the current Registration Period for the Registered Name, subject to your continued compliance with the terms of this Registration Agreement and any rules or policies published on the Website. If the Auto-Renewal feature has been enabled, you hereby authorize and instruct Badger.com to charge and deduct the applicable registration renewals fees from your Badger.com account in accordance with clause 3.5.2.'),
      p('3.5.2. Registration renewal fees are charged to you and deducted from your Badger.com account on the twentieth (15th) day of the month preceding the month in which the current Registration Period for the Registered Name expires. In the event that you do not have sufficient cleared funds in your account for the applicable registration renewal fees to be deducted, Badger.com reserves the right to cancel the registration of the Registered Name and remove it from the Registry\'s root zone file upon the expiry of the current Registration Period without further notice to you.'),
      p('3.6. You acknowledge that it is your responsibility to ensure that the Domain Name Licence is renewed and release and hold Badger.com harmless against any claim for damage or loss arising from your failure to renew registration of a Registered Name.'),
      p('3.7. It is your responsibility to ensure payment details remain current and that you maintain sufficient funds in your account for the applicable registration renewal fees where the Auto-Renewal feature has been enabled.'),
      p('3.8. In the event that a Registered Name is not renewed by you prior to the expiry of the current Registration Period, the Registered Name is immediately removed from the Registry\'s root zone file and is then held by Badger.com for a period of thirty-three (33) days ("Registrar Hold Period"). You may renew the Registered Name at any time during the Registrar Hold Period, by paying the applicable registration fees and any past due renewal fees for the Registered Name to Badger.com. Upon payment of these fees, the Registrar Hold will be removed from the Registered Name and the relevant domain name data reinstated to the Registry\'s root zone file.'),
      p('3.9. Five (5) days after the end of the Registrar Hold Period ("Five Day Period"), Badger.com shall request the Registry to delete the Registered Name from its central database of registered domain names. You may renew the Registered Name during this Five Day Period (ie. before Badger.com has requested the Registry to delete the Registered Name) by paying the applicable registration fees and any past due renewal fees together with a fee of USD$30.00 ("Extension Fee"). Badger.com charges the Extension Fee because it must manually renew the Registered Name.'),
      p('3.10. After the Registry processes the request to delete the Registered Name, it will then be subject to an additional thirty (30) day "Redemption Grace Period" during which the Registered Name can still be recovered by Badger.com and re-registered to you.'),
      p('3.11. Badger.com is charged a fee by the Registry and incurs additional administrative costs to recover a Registered Name during the Redemption Grace Period. Accordingly, Badger.com will charge you a US$100 fee to recover a Registered Name during the Redemption Grace Period ("Redemption Fee") in addition to charging you the applicable registration fee and any past due renewal fees for the Registered Name. Badger.com will only recover a Registered Name during the Redemption Grace Period upon receiving a written notice (either by email or facsimile) from you, requesting Badger.com to recover the Registered Name and agreeing to pay the Redemption Fee.'),
      p('3.12. After the expiry of the Redemption Grace Period, there is a 5 day window where the Registered Name goes in "pending delete" status, during which the Registered Name cannot be recovered by Badger.com. After the 5 day pending delete window, the Registered Name is made available for registration by the general public on a first come, first served basis.'),
      p('3.13. The Domain Name License for a Registered Name may be transferred from you to a third party transferee ("Transferee") while Badger.com remains as the sponsoring registrar of the Registered Name by having the Transferee set up an account with Badger.com, agreeing to be bound by the terms of this Registration Agreement as the new registrant and then transferring or "pushing" the Registered Name into the Transferee\'s account. Transfers of a Registered Name in conjunction with a change of sponsoring registrar must be undertaken in accordance with clause 13 below.'),
      p('3.14. New customers through a Backorder service:'),
      p('If you have purchased a domain name through a Backorder service and that domain name was registered with, and not yet deleted by, Badger.com at the time of your purchase, you acknowledge and agree that your backorder purchase may be subject to cancellation for a period of up to thirty-five (35) days after the Registrar Hold Period for that domain name. If your backorder purchase is cancelled you will be entitled to a refund. A domain name purchased via the backorder service selected by Badger.com will be treated as a new registration and therefore a request to transfer the domain name to another registrar cannot be made within 60 days of the purchase of the domain name.'),
      h3('4. Domain Name Dispute Resolution Policy'),
      p('4.1. You acknowledge that you have read, understood and agree to be bound by all terms and conditions of ICANN\'s Uniform Domain Name Dispute Resolution Policy (\'UDRP\'), as amended from time to time, which is hereby incorporated into this Registration Agreement by reference.'),
      p('4.2. For the adjudication of disputes concerning or arising from use of the Registered Name, you shall submit, without prejudice to other potentially applicable jurisdictions, to the jurisdiction of the courts of both your domicile and where Badger.com is located.'),
      h3('5. Warranties and Obligations'),
      p('5.1. You shall at all times comply with:'),
      p('(a) ICANN standards, policies, procedures and practices: and'),
      p('(b) operational standards, policies, procedures and practices adopted for each Registry TLD.'),
      p('5.2. You shall provide to Badger.com, accurate and reliable contact details and promptly correct and update them during the term of registration of the Registered Name, including:'),
      p('(a) your full name, postal address, e-mail address, voice telephone number, and fax number (if available); the name of the authorized person for contact purposes if you are an organization, association, or corporation;'),
      p('(b) the names of the primary nameserver and secondary nameserver(s) for the Registered Name;'),
      p('(c) the name, postal address, e-mail address, voice telephone number, and (where available) fax number of the technical contact for the Registered Name; and'),
      p('(d) the name, postal address, e-mail address, voice telephone number, and (where available) fax number of the administrative contact for the Registered Name.'),
      p('5.3. Your willful provision of inaccurate or unreliable information, your willful failure to promptly update information provided to Badger.com, or your failure to respond for over fifteen calendar days to inquiries by Badger.com concerning the accuracy of contact details associated with your registration shall constitute a material breach of this Registration Agreement and be a basis for cancellation of the registration of your Registered Name.'),
      p('5.4. If you license the use of a domain name to a third party ("Licensee"):'),
      p('(a) you are nonetheless the Registered Name Holder of record and responsible for providing your own full contact information and for providing and updating accurate technical and administrative contact information adequate to facilitate the timely resolution of any problems that arise in connection with the Registered Name; and'),
      p('(b) you accept liability for harm caused by the wrongful use of the Registered Name unless you promptly disclose the current contact information provided by the Licensee and the identity of the Licensee to a party providing you reasonable evidence of actionable harm.'),
      h3('6. Payment of Funds'),
      p('6.1. The applicable fees for the registration or renewal of a Registered Name must be paid in full and any identification or authorization documents requested shall be provided to Badger.com at the time of submitting the domain name registration or renewal application, as the case may be. Badger.com reserves the right to not process a domain name registration or renewal until all applicable fees have been paid, the funds cleared and any requested identification or authorization documents have been received by Badger.com. All fees are non-refundable.'),
      p('6.2. All payments of fees for the Services provided by Badger.com shall be made in U.S. dollars.'),
      p('6.3. In the event that you fail to pay any and all moneys owed to Badger.com as and when they are due and payable ("Debt"), or if any requested identification or authorization documents are not provided, then Badger.com shall be entitled in its sole discretion, to take any or all of the following actions:'),
      p('(a) immediately suspend access to your Badger.com account;'),
      p('(b) assume full control of all of the Registered Names in your Badger.com account;'),
      p('(c) transfer some or all of the Registered Names in your Badger.com account to Badger.com or its nominee, in partial or total satisfaction of the Debt. You hereby irrevocably appoint Badger.com as your attorney for the purposes of entering into any transaction and executing any document required to give effect to this clause'),
      p('6.3. You acknowledge and agree that upon Badger.com exercising its rights under clause 6.3, Badger.com shall have all rights as the official registrant of the relevant domain name, including the right to sell the domain name to a third party. Badger.com may in its sole and absolute discretion, re-transfer the relevant domain name to you, subject to the payment of any outstanding registration or renewal fees, as well as the payment to Badger.com of an administration fee.'),
      h3('7. Collection of Personal Information'),
      p('7.1. You must provide to Badger.com, the information set out in all of the fields of the applicable registration form or renewal form (\'Personal Information\'). You warrant that all Personal Information provided is complete, accurate, reliable and not otherwise misleading. You undertake to ensure that the Personal Information remains correct and current at all times during the Registration Period and to notify us immediately if there has been a change in the Personal Information. Failure to comply with this clause shall constitute a material breach of this Registration Agreement.'),
      p('7.2. You may access the Personal Information provided to Badger.com for the purposes of amending any information that is incorrect or incomplete by using a unique registry key ("Registry Key") that is provided to you by Badger.com after registration of your Registered Name.'),
      p('7.3. You may provide a written authorization to an agent to hold and use the Registry Key. If you do, Badger.com must immediately be notified of such authorization.'),
      p('7.4. Personal Information we collect from you will be dealt with in accordance with the Badger.com Privacy Policy.'),
      p('7.5. You consent to your Personal Information being:'),
      p('(a) transmitted to, and used, copied, distributed, published, modified and otherwise processed by, the Registry or its designees and agents, including in relation to the relevant central domain name registry database; and'),
      p('(b) used by Badger.com for inclusion in registers and databases maintained by Badger.com or its licensees, including the WHOIS database.'),
      p('7.6. You consent to your Personal Information being processed, stored and used in accordance with this clause 7 and the Badger.com Privacy Policy.'),
      p('7.7. You undertake to provide a copy of this clause 7 and the Badger.com Privacy Policy to any third-party individuals whose Personal Information is to be supplied to Badger.com by you and obtain the consent of such third party individuals before disclosing their Personal Information to Badger.com.'),
      p('7.8. Badger.com will not process the Personal Information collected from you in a way that is incompatible with the purposes and other limitations as set out in this clause 7 or the Badger.com Privacy Policy.'),
      p('7.9. Badger.com undertakes to use all reasonable precautions to protect Personal Information from loss, misuse, unauthorized access or disclosure, alteration, or destruction.'),
      h3('8. Agents and Licensees'),
      p('8.1. If the Services are used or accessed by your agent, you shall nonetheless be bound as a principal by all terms and conditions of this Registration Agreement, including the UDRP.'),
      p('8.2. You acknowledge that you remain the responsible contracting party under this Registration Agreement even if you license a third party to use the Registered Name.'),
      h3('9. No Warranty or Guarantee'),
      p('9.1. The Registry or ICANN may provide that registration of certain domain names is prohibited ("Prohibited Domain"). Badger.com does not guarantee that any particular domain name you wish to register or renew is not a Prohibited Domain.'),
      p('9.2. Badger.com does not guarantee that you will be able to register or renew a particular domain name, even if a preliminary search or inquiry indicates that the domain name is available. This may be due to:'),
      p('(a) the simultaneous attempted registration of the domain name by another domain name registrar; or'),
      p('(b) inaccuracies or errors in the domain name registration or renewal process or related databases, including the various WHOIS databases.'),
      p('9.3. Badger.com may in its sole and absolute discretion, accept or reject your application for the registration or renewal of a particular domain name.'),
      p('9.4. Badger.com is not responsible or liable in any way for any errors, omissions or any other actions or inactions by the Registry arising out of or in connection with your application for registration or renewal of a particular domain name, or a failure to register or renew a particular domain name.'),
      p('9.5. To the maximum extent permitted by law, Badger.com disclaims all warranties and guarantees, whether express or implied, regarding the Services or any other services that Badger.com may perform for you from time to time. To the extent that such warranties or guarantees cannot be disclaimed by law, you agree that the liability of Badger.com shall be limited to the re-supply of the service.'),
      p('9.6. You acknowledge and agree that the registration or renewal of a particular domain name through the Services or the subsequent use of the Registered Name does not confer upon you any proprietary rights in the Registered Name, nor does it guarantee immunity from and against any challenge to the registration of the Registered Name by any third party, nor from the cancellation, suspension or transfer of the Registered Name.'),
      h3('10. Third Party Rights'),
      p('10.1. You warrant that the registration or renewal of the Registered Name is made in good faith and that, to the best of your knowledge and belief, neither the registration nor renewal of the Registered Name nor the manner in which it is or shall be used, either directly or indirectly, infringes the intellectual property rights or other legal rights of any third party. A breach of this warranty shall constitute a material breach of this Registration Agreement.'),
      h3('11. Limitation of Liability'),
      p('11.1. To the maximum extent permitted by law, neither Badger.com nor the Registry shall have any responsibility and shall not be liable to you or your agent or nominee for any and all  indirect, incidental, punitive, special, exemplary, or consequential loss or damage or any damages resulting from loss of profits, arising out of or in connection with the Services or this Registration Agreement.'),
      p('11.2 To the maximum extent permitted by, you agree that in no event will the liability of Badger.com under this Registration Agreement for any matter exceed the fees paid by you to Badger.com for the provision of the Services.'),
      h3('12. Indemnity'),
      p('12.1. To the maximum extent permitted by law, you agree to indemnify, keep indemnified, defend and forever hold harmless, Badger.com, the Registry and the Registry\'s sub-contractors, and the directors, officers, employees, agents and affiliates of each of them, from and against any and all claims, damages, liabilities, costs and expenses (including reasonable legal fees and expenses) arising out of or in connection with:'),
      p('(a) your application to register or renew a particular domain name, or a failure to register or renew that domain name; or'),
      p('(b) your registration or use of any Registered Name, whether registered in your name or the name of your agent or nominee; or'),
      p('(c) your violation of any third party right, including without limitation any intellectual property or other proprietary rights;'),
      p('(d) any UDRP proceeding, other administrative proceeding or court proceeding with respect to the Registered Domain Name, whether initiated by you or by a third party.'),
      p('12.2. The indemnity set out in this clause 12 shall survive the termination or expiration of this Registration Agreement.'),
      h3('13. Change in Registrar'),
      p(span('13.1. You acknowledge and agree that you can change registrars for an existing domain name, but only in accordance with the ICANN approved '), a({href: "http://www.icann.org/en/transfers/policy-en.htm"}, 'Policy on Transfer of Registrations between Registrars'), span('.')),
      p('13.2. If you choose to change registrars for an existing domain name, this Registration Agreement will be terminated. Termination of this Registration Agreement does not affect any accrued rights or remedies of either party existing as at the date of termination.'),
      h3('14. Use of the Registered Names'),
      p('14.1. You warrant and covenant that:'),
      p('(a) The Registered Names shall not be used in such way as to mislead or deceive minors into viewing sexually explicit material, whether in breach of the provisions of H.R.939 Truth in Domain Names Act (United States) or otherwise ("Misleading Activity");'),
      p('(b) The Registered Names shall not be used to redirect internet traffic to any website that contains content (or links to such content) that:'),
      p('(i) Is hateful, defamatory, derogatory or bigoted based on racial, ethnic, political grounds or otherwise causes injury, damage or harm of any kind to any person or entity;'),
      p('(ii) That is threatening or invades another person\'s privacy or property rights or otherwise in breach of a duty owed to a third party;'),
      p('(iii) Depicts minors engaged in any activity of a sexual nature or may otherwise harm minors;'),
      p('(iv) Infringes the registered trademark, copyright, patent rights, trade secret or other intellectual property rights of a third party;'),
      p('(v) Violates any applicable local, state, national or international law or regulation;'),
      p('(vi) Promotes, is involved in or assists in, the conduct of illegal activity of any kind or promotes business opportunities or investments which are not permitted under law;'),
      p('(vii) Advertises or offers for sale any goods or services that are unlawful or in breach of any national or international law or regulation;'),
      p('(viii) Advertise or offer for sale any goods or services the advertiser does not have the legal right to sell; or'),
      p('(ix) Attempts to defraud members of the public in any way (for example, "phishing" sites).'),
      p('(collectively referred to as "Illegal Activities").'),
      p('14.2. Badger.com does not condone the use of a Registered Name for or in connection with any Misleading Activity or any Illegal Activity and reserves the right to report such activities to the relevant legal enforcement agencies if it determines in its sole and absolute discretion that a Registered Name is being used in such manner.'),
      h3('15. Material Breach'),
      p('15.1. You are in material breach of this Registration Agreement ("Material Breach") entitling Badger.com to exercise its rights under clause 16 if, after having received notice from Badger.com of the particulars of the breach ("Breach Notice"), you:'),
      p('(a) fail to rectify the breach within five (5) business days of receipt of the Breach Notice; or'),
      p('(b) fail to provide Badger.com with a reasonable explanation in defense of the breach within five (5) business days of receipt of the Breach Notice.'),
      h3('16. Suspension, Cancellation, Transfer or Modification of Domain Name Registration'),
      p('16.1. Badger.com may immediately suspend, cancel, transfer or modify your registration of Registered Names by providing you with notice to your primary email address listed on your Badger.com account if:'),
      p('(a) you are in Material Breach of this Registration Agreement;'),
      p('(b) Badger.com has reasonable grounds to believe that a Registered Name is being used for or in connection with a Misleading Activity or an Illegal Activity; or'),
      p('(c) Badger.com has reasonable grounds to believe that a Registered Name(s) is being used contrary to Badger.com\'s Anti-Spam Policy.'),
      p('16.2. Your Registered Names are subject to suspension, cancellation, transfer or modification by Badger.com, pursuant to the terms of any applicable rules, policies or procedures adopted by:'),
      p('(a) ICANN, or'),
      p('(b) Any domain name registrar (including Badger.com) or any central domain name registry operator (including the Registry) to the extent that they are not inconsistent with those of or adopted by ICANN, for the purpose(s) of:'),
      p('(i) correcting mistakes by Badger.com or any central domain name registry operator (including the Registry) in registering, renewing and/or transferring the Registered Names; or'),
      p('(ii) resolving disputes concerning the Registered Names.'),
      p('16.3. The relevant Registry has the right to deny, cancel or transfer any registration or transaction, or place any domain name on registry lock, hold or similar status that it deems necessary in its discretion:'),
      p('(a) to protect the integrity and stability of the Registry;'),
      p('(b) to comply with any applicable laws, government rules or requirements, requests of law enforcement, or any dispute resolution process;'),
      p('(c) to avoid any liability, civil or criminal, on the part of the Registry, as well as its affiliates, subsidiaries, officers, directors and employees; or'),
      p('(d) to correct mistakes by Badger.com or the Registry in registering, renewing and/or transferring the Registered Names.'),
      p('The Registry also reserves the right to place upon registry lock, hold or similar status a Registered Name during resolution of a dispute.'),
      p('16.4. You acknowledge and agree that the .ORG Registry, Public Interest Registry ("PIR"), has in place a Domain Anti-Abuse Policy and that an abusive use of a domain name may give rise to PIR exercising its right pursuant to clause 16.3. Please read the Policy for an understanding of what PIR regards as an abusive use of a domain name.'),
      h3('17. Survival'),
      p('17.1. Clauses 7, 9, 10, 11, 12, 14 and 18 shall survive the termination or expiration of this Registration Agreement.'),
      h3('18. Severability'),
      p('18.1. The terms of this Registration Agreement are severable. If any term or provision is declared invalid or unenforceable, it shall be severed from this Registration Agreement and shall not affect the interpretation or operation of the remaining terms or provisions, which shall remain in full force and effect.'),
      h3('19. Entire Agreement'),
      p('19.1. To the maximum extent permitted by law (including the Australian Consumer Law), this Registration Agreement and the UDRP incorporated herein, constitutes the entire agreement between you and Badger.com regarding the provision of the Services and supersede all prior agreements and understandings, whether established by custom, practice, policy, or precedent.'),
      h3('20. Governing Law'),
      p('20.1. This Registration Agreement is governed in all respects by and construed in accordance with the laws of the State of California, United States, and you submit to the non-exclusive jurisdiction (without prejudice to other potentially applicable jurisdictions) of California, United States.'),
      h3('21. Relationship'),
      p('21.1. Nothing in this Registration Agreement shall be construed as creating the relationship of agency, partnership or joint venture between the parties.'),
      h3('22. Force Majeure'),
      p('22.1. Neither party will be in default or otherwise liable for any delay or failure in its performance under this Registration Agreement where such delay or failure arises by reason of an Act of God, any government or governmental body, acts of war, the elements, strikes or labor disputes, power or system failures, failure of the Internet, computer hacking, or other causes beyond the reasonable control of such party.'),
      h3('23. Waiver'),
      p('23.1. Failure by either party to exercise or enforce any right or provision of this Registration Agreement shall not be deemed to be a waiver of such right or provision and does not affect the right to require any provision to be performed at any time thereafter.'),
      h3('24. Notices'),
      p('24.1. All notices required to be sent under this Registration Agreement shall be sent via e-mail:'),
      p('(a) If to Badger.com, to support@badger.com'),
      p('(b) If to you, to the primary email address listed on your Badger.com account.'),
      p('24.2. Any notice sent shall be deemed to have been received at the time and date logged by the sender\'s email server of confirmation of delivery of the email message to the recipient\'s email server.')
    )
  });
}
