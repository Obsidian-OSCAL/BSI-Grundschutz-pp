---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.5.1.2 Pre-Boot-Authentifizierung
parent_control: KONF.5.1 Authentifizierung am System
stmt_target_object_category: Endgeräte
stmt_modal_verb: KANN
stmt_action_word: authentifizieren
stmt_documentation: Konfigurationshistorie
result_reference: Zugriff
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.5.1.2 - Pre-Boot-Authentifizierung
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.5 Authentifizierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.5%20Authentifizierung.md)
---

** Übergeordnetes Control: ** [KONF.5.1 Authentifizierung am System](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.5.1%20Authentifizierung%20am%20System.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Authentifizierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.5%20Authentifizierung.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [Endgeräte](target_object_categories_Endgeräte_837781a4-7b47-4695-9545-a3310eac7a66) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | den Zugriff vor dem Start des Betriebssystems |  | [authentifizieren](action_words_authentifizieren_8e423108-c6dd-41fd-8104-e9221bd9d085) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für Endgeräte KANN den Zugriff vor dem Start des Betriebssystems authentifizieren.</span>
> > [!example]- im Ergebnis referenzierte Begriffe
> > | Begriff | Definition |> > | - | - |> > | [Zugriff](result_Zugriff_00000000-0000-0000-0000-000000000000) | Mit Zugriff wird die Nutzung von Informationen oder Daten bezeichnet. Über Zugriffsberechtigungen wird geregelt, welche Personen im Rahmen ihrer Funktionen oder welche IT-Anwendungen bevollmächtigt sind, Informationen, Daten oder auch IT-Anwendungen, zu nutzen oder Transaktionen auszuführen. |

> [!info]- Guidance
>Diese Authentifizierung vor dem Start, oft als "Pre-Boot Authentication" (PBA) oder "Hardware-based Authentication" bezeichnet, verhindert, dass ein Gerät gestartet wird, bevor sich Nutzende mit Anmeldeinformationen, wie zum Beispiel einem Passwort oder einem biometrischen Merkmal, autorisiert haben. Ohne diese Authentifizierung könnte ein Angreifer versuchen, das Gerät direkt zu booten, die Festplatte zu kopieren oder zu manipulieren, um sensitive Daten zu extrahieren. Eine gängige Methode ist die Verwendung einer Festplattenverschlüsselung (Full Disk Encryption, FDE) mit einer Pre-Boot-Authentifizierung. Eine Institution könnte auch eine Mehr-Faktor-Authentifizierung (MFA) vor dem Start des Betriebssystems einsetzen, beispielsweise indem ein Hardware-Token oder ein biometrischer Scan zusätzlich zum Passwort erforderlich ist, was die Sicherheit weiter erhöht.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 89f6db4b-b55b-4218-aad6-6f5c33a49ee6 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 89f6db4b-b55b-4218-aad6-6f5c33a49ee6 |
