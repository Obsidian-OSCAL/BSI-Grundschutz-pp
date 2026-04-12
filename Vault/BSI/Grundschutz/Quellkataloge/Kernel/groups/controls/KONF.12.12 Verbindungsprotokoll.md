---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.12.12 Verbindungsprotokoll
stmt_target_object_category: TK-Anwendungen
stmt_modal_verb: SOLLTE
stmt_action_word: protokollieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.12.12 - Verbindungsprotokoll
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.12 Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [TK-Anwendungen](target_object_categories_TK-Anwendungen_67f74abf-162d-4e47-a24a-6ff53e9b124d) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | ein für Nutzende verfügbares Verbindungsprotokoll |  | [protokollieren](action_words_protokollieren_fe0c8466-8c0d-450b-a649-02c11e0231f8) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für TK-Anwendungen SOLLTE ein für Nutzende verfügbares Verbindungsprotokoll protokollieren.</span>

> [!info]- Guidance
>Ein solches Protokoll, oft auch als Call Detail Record (CDR) oder Connection Log bezeichnet, dokumentiert für Nutzende nachvollziehbar die Kommunikationsverbindungen, die sie über die Anwendung herstellen. Das Protokoll könnte dabei erfassen, wann eine Verbindung aufgebaut wurde, wie lange sie bestand, mit wem sie stattfand (z.B. die Rufnummer oder der Benutzername der Gegenstelle) und aus welcher Richtung (ein- oder ausgehend) sie kam. In der klassischen Telefonie ist dies die Auflistung der zuletzt ein- oder ausgehenden Anrufe. Eine solche Protokollierung kann als wichtige Maßnahme der Rechenschaftspflicht oder Accountability dienen. Durch die lückenlose Protokollierung der Aktivitäten der Nutzenden kann transparent nachvollzogen werden, welche Verbindungen zu welchem Zeitpunkt hergestellt wurden. Dies kann dabei helfen, ungewöhnliche oder nicht autorisierte Kommunikationsversuche zu erkennen und die Integrität der genutzten Systeme zu wahren. Ohne ein solches Protokoll könnte eine unberechtigte Nutzung oder ein Datenabfluss aus dem internen Netzwerk unentdeckt bleiben. Hierbei besteht ein enger Zusammenhang mit Compliance-Verpflichtungen zur Aufbewahrung und Löschung von Telekommunikationsdaten.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 31191a30-d1fd-4adf-a407-35e4fc782e79 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 31191a30-d1fd-4adf-a407-35e4fc782e79 |
