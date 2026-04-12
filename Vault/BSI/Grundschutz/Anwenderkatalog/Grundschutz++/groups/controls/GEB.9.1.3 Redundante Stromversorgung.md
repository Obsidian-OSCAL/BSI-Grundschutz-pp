---
tags:
- hochverfügbarkeit
- geb913-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: GEB.9.1.3 Redundante Stromversorgung
parent_control: GEB.9.1 Normgerechte Stromversorgung
stmt_target_object_category: Standorte
stmt_modal_verb: KANN
stmt_action_word: installieren
stmt_documentation: IT-Betriebskonzept
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# GEB.9.1.3 - Redundante Stromversorgung
Tag: [[tags_Hochverfügbarkeit|Hochverfügbarkeit]]
Gruppe: [GEB.9 Versorgungseinrichtungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/GEB.9%20Versorgungseinrichtungen.md)
---

** Übergeordnetes Control: ** [GEB.9.1 Normgerechte Stromversorgung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/GEB.9.1%20Normgerechte%20Stromversorgung.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Gebäudemanagement (GEB)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/GEB%20Gebäudemanagement.md)*<br> *  &rarr; [Versorgungseinrichtungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/GEB.9%20Versorgungseinrichtungen.md) *</div> | [Gebäudemanagement](practices_Gebäudemanagement_17b37cff-5445-4487-acec-ef18d91cfec2) | [Standorte](target_object_categories_Standorte_df3978e8-775d-4aa6-8be7-fd2a6f12315d) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | eine redundante Stromversorgung | für {{eine Stützzeit}} | [installieren](action_words_installieren_8e432bcd-2e41-444d-98d4-c4dbbdc9e575) | [IT-Betriebskonzept](documentation_guidelines_IT-Betriebskonzept) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Gebäudemanagement für Standorte KANN eine redundante Stromversorgung für {{ insert: param, geb.9.1.3-prm1 }} installieren.</span>

> [!info]- Guidance
>Wenn die Stromzufuhr ausfällt, könnten geschäftskritische Anwendungen unerwartet ausfallen oder Daten verlorengehen.   Die Redundanz der Stromquelle kann z.B. durch einen im System integrierten Akku, durch eine eigenständige unterbrechungsfreie Stromversorgung (USV) oder durch die Anbindung an ein sekundäres Stromnetz gewährleistet werden. Bei Bedarf kann sie auch die Übergangszeit bis zum Anlauf einer längerfristigen Netzersatzanlage überbrücken. Beim Betrieb einer USV ist auf die Einhaltung eines akzeptablen Temperaturbereichs der Batterie zu achten. Bei relevanten Änderungen an den Verbrauchern könnte es vorkommen, dass die USV-Systeme nicht mehr ausreichend dimensioniert sind. Da der Leistungsbedarf von Klimaanlagen oft zu hoch für eine USV ist, empfiehlt es sich zumindest die Steuerung der Anlagen an die unterbrechungsfreie Stromversorgung anzuschließen. Eine regelmäßige Wartung (u.U. nach Vorgabe des Herstellers) der USV und eine Trennung der Leistungselektronik von der Batterie ist empfohlen. Bei sehr hohem Schutzbedarf empfiehlt sich eine redundante Auslegung der USV.  Die minimale Stützzeit (Autonomiezeit) ergibt sich als Stützzeit = Wartezeit auf mögliche Wiederkehr der Stromversorung + 2 * Zeit zum Herunterfahren der Komponenten. Bei sehr hohem Schutzbedarf empfiehlt sich eine redundante Auslegung der USV.  Die Verkabelungswege sind redundant, wenn die Leitungen über verschiedene Wege geführt sind, sodass z.B. eine versehentliche Trennung nicht beide Leitungen betrifft.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | eeaa8977-05e5-4eaa-a5b7-ea490eb543cd |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | eeaa8977-05e5-4eaa-a5b7-ea490eb543cd |
