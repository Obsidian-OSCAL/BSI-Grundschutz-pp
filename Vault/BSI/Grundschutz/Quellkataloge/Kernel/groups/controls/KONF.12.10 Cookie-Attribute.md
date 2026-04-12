---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.12.10 Cookie-Attribute
stmt_target_object_category: Webanwendungen
stmt_modal_verb: SOLLTE
stmt_action_word: aktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.12.10 - Cookie-Attribute
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.12 Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [Webanwendungen](target_object_categories_Webanwendungen_36cb0d6b-2f90-43bc-b625-9870112cf847) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | Cookie-Attribute |  | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für Webanwendungen SOLLTE Cookie-Attribute aktivieren.</span>

> [!info]- Guidance
>"Secure" erzwingt die verschlüsselte HTTPS-Übertragung, wodurch Man-in-the-middle-Angriffe verhindert werden. "SameSite" sorgt dafür, dass Cookies nur zurückgesendet werden, wenn die Anfrage von der ursprünglichen Seite stammt. Hierdurch werden Cross-Site-Request-Forgery-Angriffe erschwert. "HttpOnly" verbietet es Client-seitigen Skripten auf das Cookie zuzugreifen, wodurch Cross-Site Scripting (XSS) erschwert wird.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 4ac2fe69-5f2d-47d8-acf7-2be1485f9f37 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 4ac2fe69-5f2d-47d8-acf7-2be1485f9f37 |
