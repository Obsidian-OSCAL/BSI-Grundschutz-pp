---
tags:
- produktbeschreibung_lateral_movement
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.7.3 Host-basierte Angriffserkennung
stmt_target_object_category: IT-Systeme
stmt_modal_verb: SOLLTE
stmt_action_word: aktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.7.3 - Host-basierte Angriffserkennung
> [!example]- Tags:> [[tags_Produktbeschreibung|Produktbeschreibung]]> [[tags_Lateral_Movement|Lateral Movement]]
Gruppe: [KONF.7 Schutz vor Schadcode](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.7%20Schutz%20vor%20Schadcode.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Schutz vor Schadcode](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.7%20Schutz%20vor%20Schadcode.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | Host-basierte Angriffserkennung |  | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für IT-Systeme SOLLTE Host-basierte Angriffserkennung aktivieren.</span>

> [!info]- Guidance
>Host-basierte Angriffserkennung, im Englischen auch als Host-based Intrusion Detection (HID) oder Host-based Intrusion Prevention (HIP) bezeichnet, bezieht sich auf Mechanismen, die auf den einzelnen IT-Systemen, wie Servern oder Workstations, selbst operieren, um böswillige Aktivitäten zu erkennen und zu verhindern. Im Gegensatz zu netzwerkbasierten Systemen, die den Datenverkehr überwachen, fokussiert sich die Host-basierte Erkennung auf interne Systemereignisse, wie die Integrität von Dateisystemen, Änderungen an kritischen Konfigurationsdateien, oder die Erkennung von unbekannten Prozessen. Der Hauptzweck dieser Anforderung besteht darin, eine zusätzliche Sicherheitsebene zu schaffen, die direkt am Endpunkt (Host) agiert, was die Erkennung von Angriffen ermöglicht, die bereits die äußeren Schutzmechanismen überwunden haben könnten, beispielsweise wenn ein Angreifer eine bekannte Schwachstelle ausnutzt, um einen Prozess mit erhöhten Rechten auszuführen. Diese Maßnahmen können dabei helfen, interne Lateralbewegungen eines Angreifers zu erkennen und somit die Ausbreitung eines Vorfalls zu verlangsamen oder zu stoppen, bevor es zu einem größeren Schaden kommt.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | c6ea1218-1fc7-472f-96e5-df42b2acafa9 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | c6ea1218-1fc7-472f-96e5-df42b2acafa9 |

> [!info]- Links> > related: [DET.4.2 Automatische Angriffserkennung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.4.2%20Automatische%20Angriffserkennung.md)
