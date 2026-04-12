---
tags:
- hochverfügbarkeit
- geb914-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: GEB.9.1.4 Langanhaltende Sekundärversorgung
parent_control: GEB.9.1 Normgerechte Stromversorgung
stmt_target_object_category: Standorte
stmt_modal_verb: KANN
stmt_action_word: installieren
stmt_documentation: IT-Betriebskonzept
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# GEB.9.1.4 - Langanhaltende Sekundärversorgung
Tag: [[tags_Hochverfügbarkeit|Hochverfügbarkeit]]
Gruppe: [GEB.9 Versorgungseinrichtungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/GEB.9%20Versorgungseinrichtungen.md)
---

** Übergeordnetes Control: ** [GEB.9.1 Normgerechte Stromversorgung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/GEB.9.1%20Normgerechte%20Stromversorgung.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Gebäudemanagement (GEB)](BSI/Grundschutz/Quellkataloge/Kernel/groups/GEB%20Gebäudemanagement.md)*<br> *  &rarr; [Versorgungseinrichtungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/GEB.9%20Versorgungseinrichtungen.md) *</div> | [Gebäudemanagement](practices_Gebäudemanagement_17b37cff-5445-4487-acec-ef18d91cfec2) | [Standorte](target_object_categories_Standorte_df3978e8-775d-4aa6-8be7-fd2a6f12315d) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | eine redundante Stromversorgung | für {{eine längere Stützzeit}} | [installieren](action_words_installieren_8e432bcd-2e41-444d-98d4-c4dbbdc9e575) | [IT-Betriebskonzept](documentation_guidelines_IT-Betriebskonzept) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Gebäudemanagement für Standorte KANN eine redundante Stromversorgung für {{ insert: param, geb.9.1.4-prm1 }} installieren.</span>

> [!info]- Guidance
>Eine längere Stützzeit bezeichnet im Kontext der Stromversorgung die Fähigkeit, elektrische Energie über einen Zeitraum von mehreren Stunden oder sogar Tagen aufrechtzuerhalten, typischerweise durch den Einsatz einer Netzersatzanlage (NEA) oder vergleichbarer Infrastruktur. Während eine kurzzeitige Überbrückung durch unterbrechungsfreie Stromversorgungen (USV) lediglich Sekunden bis Minuten abdeckt, kann eine NEA längere Stromausfälle abfangen und die Betriebsfähigkeit kritischer Systeme dauerhaft sicherstellen. Risiken bestehen darin, dass ein Standort bei einem längerfristigen Netzausfall ohne redundante Stromversorgung seine sicherheitskritischen Prozesse nicht mehr betreiben könnte, was etwa zu Datenverlusten, Produktionsstillständen oder Ausfällen der Zutrittskontrolle führen könnte. Eine redundante Stromversorgung kann dem entgegenwirken, indem sie kritische Infrastrukturen wie Rechenzentren, Kommunikationssysteme oder Zutrittssysteme auch bei großflächigen Netzstörungen handlungsfähig hält. Zur Betriebsfähigkeit gehört auch die regelmäßige Wartung und Überprüfung des Betriebsmittelvorrats. Eine Institution kann die Anforderung umsetzen, indem sie geeignete technische Maßnahmen einplant: (1) Installation einer Netzersatzanlage mit automatischer Umschaltung auf Diesel- oder Gasgeneratoren, (2) Bereitstellung von Kraftstoffvorräten für eine definierte Stützzeit von beispielsweise 24, 48 oder 72 Stunden, (3) regelmäßige Lasttests, um sicherzustellen, dass die Anlage die notwendige Kapazität unter Realbedingungen liefern kann. Ergänzend kann eine Institution durch redundante Einspeisungen vom Energieversorger oder die Kombination mehrerer NEA-Module eine Ausfallsicherheit erhöhen. Prozessual kann sie Wartungspläne etablieren, die auch die Prüfung von Kraftstoffqualität, Starterbatterien und Umschalteinrichtungen umfassen. Praktische Umsetzungstipps sind etwa, NEA-Anlagen in geschützten Gebäudebereichen mit ausreichender Belüftung und Brandschutz vorzusehen, die Abgasführung nach außen zu gewährleisten und einen sicheren, vor Manipulation geschützten Tankstandort zu wählen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 9de758ff-88f1-4350-b937-354a5e4e5fc5 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 9de758ff-88f1-4350-b937-354a5e4e5fc5 |
