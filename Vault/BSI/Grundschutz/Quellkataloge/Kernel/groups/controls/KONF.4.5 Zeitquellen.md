---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.4.5 Zeitquellen
stmt_target_object_category: IT-Systeme
stmt_modal_verb: SOLLTE
stmt_action_word: autorisieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '2'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.4.5 - Zeitquellen
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.4 Vertrauenswürdige Basisdienste](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.4%20Vertrauenswürdige%20Basisdienste.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Vertrauenswürdige Basisdienste](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.4%20Vertrauenswürdige%20Basisdienste.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | Zeitquellen |  | [autorisieren](action_words_autorisieren_7e32a8ee-3b6b-45c2-a788-d4223d7920ad) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für IT-Systeme SOLLTE Zeitquellen autorisieren.</span>

> [!info]- Guidance
>Eine einheitliche Zeitquelle für die Systemuhr (meist über NTP oder PTP) ist essenziell für die einheitliche Auswertung von Logdateien, sowie für moderne kryptographische Verfahren. Es empfiehlt sich zu definieren, welche NTP-Server von welchen NTP-Clients genutzt werden sollen und ob NTP-Server im Broadcast-Modus oder im Client-Server-Modus arbeiten. Letzteres (Client-Server) ist hierbei Best Practice. In bestimmten Fällen empfiehlt es sich außerdem, dass sich NTP-Server bei der Kommunikation gegenüber Clients authentisieren und demnach NTP-Clients nur authentifizierte NTP-Daten akzeptieren.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 92eee157-2b9b-4a80-8f17-4b124590d72f |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 92eee157-2b9b-4a80-8f17-4b124590d72f |
