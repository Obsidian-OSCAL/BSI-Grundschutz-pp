---
tags:
- data_leak
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.2.4.2 Externe Cloud-Anbindungen
parent_control: KONF.2.4 Deaktivierung nicht benötigter Systemfunktionen
stmt_target_object_category: IT-Systeme
stmt_modal_verb: SOLLTE
stmt_action_word: deaktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '4'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.2.4.2 - Externe Cloud-Anbindungen
Tag: [[tags_Data Leak|Data Leak]]
Gruppe: [KONF.2 Konfiguration von Systemen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.2%20Konfiguration%20von%20Systemen.md)
---

** Übergeordnetes Control: ** [KONF.2.4 Deaktivierung nicht benötigter Systemfunktionen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.2.4%20Deaktivierung%20nicht%20benötigter%20Systemfunktionen.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Konfiguration von Systemen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.2%20Konfiguration%20von%20Systemen.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | nicht benötigte Cloud-Anbindungen |  | [deaktivieren](action_words_deaktivieren_5f0f5c35-65a5-4db2-9b27-0d86c2d7089b) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für IT-Systeme SOLLTE nicht benötigte Cloud-Anbindungen deaktivieren.</span>

> [!info]- Guidance
>Eine Cloud-Anbindung ist eine technische Schnittstelle, über die ein IT-System Daten oder Dienste mit einer externen Cloud-Plattform austauscht. Dazu können sowohl direkte API-Integrationen wie die Anmeldung an Cloud-Verzeichnisdienste, aber auch automatische Synchronisationsmechanismen, Hintergrund-Updates über Cloud-Server oder agentenbasierte Remote-Management-Funktionen zählen. Nicht benötigte Anbindungen können dadurch identifiziert werden, dass sie weder für den produktiven Betrieb noch für Wartung, Support oder Sicherheitsfunktionen erforderlich sind. Der Sinn und Zweck dieser Regelung liegt darin, die Angriffsfläche zu reduzieren und unkontrollierte Datenflüsse zu vermeiden. Ein nicht genutzter, aber weiterhin aktiver Cloud-Connector könnte etwa unbemerkt sensible Metadaten an Drittdienste übertragen oder als Einfallstor für Schadsoftware missbraucht werden; die gezielte Deaktivierung kann dagegen unnötige Risiken eliminieren und die Übersichtlichkeit der Systemarchitektur erhöhen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 35875b35-0c23-473e-b1d6-1741c315dc88 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 35875b35-0c23-473e-b1d6-1741c315dc88 |
