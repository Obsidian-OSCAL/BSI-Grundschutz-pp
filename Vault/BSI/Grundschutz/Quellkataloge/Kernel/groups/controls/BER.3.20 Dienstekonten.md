---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.3.20 Dienstekonten
stmt_target_object_category: Hostsysteme
stmt_modal_verb: SOLLTE
stmt_action_word: aktivieren
stmt_documentation: Inventar Berechtigungen
result_reference: Zugang
control_effort_level: '4'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.3.20 - Dienstekonten
Gruppe: [BER.3 Zugangskonten](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.3%20Zugangskonten.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Berechtigung (BER)](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER%20Berechtigung.md)*<br> *  &rarr; [Zugangskonten](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.3%20Zugangskonten.md) *</div> | [Berechtigung](practices_Berechtigung_389cd5ad-fb81-4a95-8f7a-8f1fe1881709) | [Hostsysteme](target_object_categories_Hostsysteme_19c946fc-e991-44ee-87c5-7bbe5d5aaf55) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | eine automatische Verwaltung der Zugangsdaten | von Dienste-Konten | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Inventar Berechtigungen](documentation_guidelines_Inventar Berechtigungen) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Berechtigung für Hostsysteme SOLLTE eine automatische Verwaltung der Zugangsdaten von Dienste-Konten aktivieren.</span>
> > [!example]- im Ergebnis referenzierte Begriffe
> > | Begriff | Definition |> > | - | - |> > | [Zugang](result_Zugang_00000000-0000-0000-0000-000000000000) | Mit Zugang wird die Nutzung von IT-Systemen, System-Komponenten und Netzen bezeichnet. Zugangsberechtigungen erlauben somit einer Person, bestimmte Ressourcen wie IT-Systeme oder System-Komponenten und Netze zu nutzen. |

> [!info]- Guidance
>Eine automatische Verwaltung der Zugangsdaten von Dienste-Konten bezeichnet in diesem Kontext die technische Fähigkeit, Passwörter, Schlüssel oder Tokens solcher Konten – im Englischen häufig als service accounts oder machine identities bezeichnet – durch spezialisierte Systeme ohne manuelles Eingreifen zu erzeugen, zu speichern, regelmäßig zu erneuern und kontrolliert zu verteilen. Zugangsdaten sind hierbei sämtliche Authentifizierungsinformationen, die einem Dienst ermöglichen, auf Ressourcen anderer Systeme zuzugreifen, beispielsweise API-Schlüssel, SSH-Keys oder Anmeldedaten für Datenbanken. Dienste-Konten werden meist von Applikationen, Hintergrunddiensten oder Automatisierungsprozessen genutzt und unterscheiden sich von personenbezogenen Benutzerkonten dadurch, dass sie keinem Individuum zugeordnet sind, sondern einem technischen Zweck dienen. Erfolgt bei Zugangskonten für automatisierte Dienste eine automatische Rotation von Passwörtern oder Anmeldezertifikaten, so werden statische Passwörter, die Ablage von Zugangsdaten auf Netzlaufwerken oder plötzliche Fehlfunktionen durch Zertifikatsablauf vermieden. Ihre automatische Verwaltung kann durch zentrale Passworttresore (password vaults), Identitätsmanagementsysteme (Identity and Access Management, IAM) oder Secret-Management-Lösungen realisiert werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 403fac1f-a78a-4548-858e-a06168253dea |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 403fac1f-a78a-4548-858e-a06168253dea |
