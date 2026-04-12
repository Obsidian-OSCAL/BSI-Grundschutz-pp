---
tags:
- produktbeschreibung
- konf35-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.3.5 Standortbestimmung
stmt_target_object_category: IT-Systeme
stmt_modal_verb: KANN
stmt_action_word: aktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.3.5 - Standortbestimmung
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.3 Physischer Schutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.3%20Physischer%20Schutz.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Physischer Schutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.3%20Physischer%20Schutz.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | eine Funktion zur Bestimmung des Standortes aus der Ferne | {{durch einen automatisierten Mechanismus}} | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für IT-Systeme KANN eine Funktion zur Bestimmung des Standortes aus der Ferne {{ insert: param, konf.3.5-prm1 }} aktivieren.</span>

> [!info]- Guidance
>Der Begriff automatisierter Mechanismus bezeichnet im gegebenen Kontext ein technisches Verfahren, das ohne manuelle Eingriffe die Standortbestimmung eines IT-Systems ermöglicht. Dies kann etwa durch GALILEO- oder GPS-Sensoren, durch WLAN- oder Mobilfunkortung, sowie durch Auswertung netzwerktechnischer Parameter erfolgen. Der Rückgriff auf die Standortbestimmung mittels Mobilfunksignal oder WLANs in der Nähe ist nur empfehlenswert, wenn das System die Satellitenbestimmung nicht unterstützt. Der Sinn dieser Vorschrift liegt darin, potenzielle Risiken durch unkontrollierte Standortänderungen oder verdeckte Verlagerungen von IT-Systemen zu reduzieren. Ein Vorfall könnte eintreten, wenn ein Server oder Endgerät unbemerkt aus einem gesicherten Bereich entfernt wird und dadurch sensible Daten oder Konfigurationen kompromittiert werden. Im positiven Fall kann die Standortbestimmung Transparenz über den Verbleib kritischer Systeme schaffen und so die Reaktionsfähigkeit bei Diebstahl oder Verlust erhöhen. Ein praktischer Ansatz kann sein, dass Systeme beim Start ihre Position automatisch protokollieren, sodass Abweichungen vom erwarteten Standort erkannt werden. Alternativ kann eine Softwarelösung eingesetzt werden, die Netzwerkverbindungen auf bestimmte Geozonen überprüft. Beachten Sie hierbei auch den Zusammenhang mit den Verfahren und Regelungen zum Informations- und Assetmanagement, sowie zur Detektion von Sicherheitsvorfällen, etwa dass Standortdaten regelmäßig in ein zentrales Monitoring-Tool eingespielt und mit erlaubten Standorten abgeglichen werden. Um technische Ressourcenauslastung und Datenschutz angemessen auszubalancieren ist es zweckmäßig dies nur für besonders schutzbedürftige Geräte vorzusehen und klar festzulegen, ob die Standortbestimmung kontinuierlich, ereignisbezogen oder stichprobenartig erfolgt.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 4a18939a-0972-4ac7-9584-18fffde38db6 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 4a18939a-0972-4ac7-9584-18fffde38db6 |
