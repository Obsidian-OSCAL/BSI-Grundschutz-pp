---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.4.1 Anbindung an Verzeichnisdienst
stmt_target_object_category: IT-Systeme
stmt_modal_verb: SOLLTE
stmt_action_word: aktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.4.1 - Anbindung an Verzeichnisdienst
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.4 Vertrauenswürdige Basisdienste](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.4%20Vertrauenswürdige%20Basisdienste.md)
---

> [!example]- Untergeordnete Controls
> [KONF.4.1.1 Weiterleitung von Anmeldeinformationen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.4.1.1%20Weiterleitung%20von%20Anmeldeinformationen.md)### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Vertrauenswürdige Basisdienste](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.4%20Vertrauenswürdige%20Basisdienste.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | die Anbindung an einen Verzeichnisdienst |  | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für IT-Systeme SOLLTE die Anbindung an einen Verzeichnisdienst aktivieren.</span>

> [!info]- Guidance
>Anbindung meint hier die Authentifizierung und Autorisierungsprüfung von Zugangskonten über einen Verzeichnisdient (häufig auch als Directory Service bezeichnet). Dies ermöglicht die zentrale Verwaltung von Identitäten und deren Berechtigungen. Dies bedeutet, dass Zugriffsrechte für alle angebundenen Systeme zentral verwaltet und bei Bedarf umgehend angepasst werden können, was die Einhaltung des Prinzips der geringsten Rechte (Principle of Least Privilege) unterstützt. Ein häufiger Ansatz zur technischen Umsetzung ist die Verwendung von Protokollen wie LDAP (Lightweight Directory Access Protocol) oder der Einsatz von Single Sign-On (SSO) Lösungen, die eine einmalige Authentifizierung des Nutzers für mehrere Systeme ermöglichen. Institutionen können dabei die Anbindung neuer Systeme durch Automatisierung im Rahmen des Provisioning-Prozesses sicherstellen, um menschliche Fehler zu reduzieren. Beispielsweise könnte ein Standard-Skript bei der Installation eines neuen Servers dessen automatische Anbindung an den Verzeichnisdient veranlassen. In Windows Betriebssystemen erfolgt die Konfiguration des Betriebssystem über entsprechende Gruppenrichtlinien (Group Policy Object) aus dem Active Directory.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 99b370b9-b48c-4f68-b88c-d44ef31f83e0 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 99b370b9-b48c-4f68-b88c-d44ef31f83e0 |
