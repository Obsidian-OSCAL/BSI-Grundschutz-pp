---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.13.2.1 Verifikation der Sendeberechtigung
parent_control: KONF.13.2 Authentizität von Nachrichten
stmt_target_object_category: E-Mail
stmt_modal_verb: SOLLTE
stmt_action_word: aktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.13.2.1 - Verifikation der Sendeberechtigung
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.13 Senden und Empfangen von Nachrichten](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md)
---

** Übergeordnetes Control: ** [KONF.13.2 Authentizität von Nachrichten](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.13.2%20Authentizität%20von%20Nachrichten.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Senden und Empfangen von Nachrichten](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [E-Mail](target_object_categories_E-Mail_7aa03e0c-a417-4b08-a6d5-b89bd63c6a83) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | eine automatische Verifikation der Sendeberechtigung |  | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für E-Mail SOLLTE eine automatische Verifikation der Sendeberechtigung aktivieren.</span>

> [!info]- Guidance
>Mit dem Sender Policy Framework (SPF) kann geprüft werden, ob der Sender zum Versand von E-Mails für diese Mailadresse berechtigt war. E-Mails ohne SPF-Header sind unzureichend authentifiziert, so dass sie leicht für Spoofing oder Phishing missbraucht werden können. Allerdings werden noch immer E-Mails ohne SPF verschickt, so dass eine Blockierung zu funktionalen Einschränkungen führen könnte. Kompromissmaßnahmen können z.B. die Markierung der E-Mail mit einem Warnhinweis , Allowlisting, Greylisting, Quarantäne oder eine Filterung durch Anomalieerkennung sein.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | c163be1f-8236-439c-a1d1-34fa7472c06a |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | c163be1f-8236-439c-a1d1-34fa7472c06a |
